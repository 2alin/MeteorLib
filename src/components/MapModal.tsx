import React from 'react';
import withStyles from 'react-jss';
import { Coordinates } from '../types';
import { CONTROLS_WIDTH, BREAKING_POINT } from '../style';

const styles = {
  container: {
    background: 'pink',
    position: 'fixed',
    zIndex: 10,
    top: 0,
    right: 0,
    bottom: 0,
    left: CONTROLS_WIDTH + 'px',
    [`@media (max-width: ${BREAKING_POINT}px)`]: {
      left: 0,
    },
  },
};

interface Props {
  mapCoordinates: Coordinates | null;
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
    const { classes, quitModal, mapCoordinates } = this.props;
    return (
      <div className={classes.container} onClick={quitModal}>
        {mapCoordinates !== null
          ? mapCoordinates[0] + ' , ' + mapCoordinates[1]
          : 'no available coordinates'}
      </div>
    );
  }
}

export default withStyles(styles)(MapModal);
