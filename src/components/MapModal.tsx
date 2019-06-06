import React from 'react';
import withStyles from 'react-jss';

const styles = {
  container: {
    background: 'pink',
    position: 'fixed',
    zIndex: 10,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

interface Props {
  quitModal: () => void;
  classes: any;
}

class MapModal extends React.Component<Props> {
  componentDidMount() {
    console.log('componenet mounted');
    (document.querySelector('body') as HTMLBodyElement).classList.add(
      'noscroll'
    );
  }

  componentWillUnmount() {
    console.log('component unmounted');
    (document.querySelector('body') as HTMLBodyElement).classList.remove(
      'noscroll'
    );
  }
  render() {
    const { classes, quitModal } = this.props;
    return (
      <div className={classes.container} onClick={quitModal}>
        I'm a map container
      </div>
    );
  }
}

export default withStyles(styles)(MapModal);
