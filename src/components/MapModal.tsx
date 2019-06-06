import React from 'react';
import InfoBox from './InfoBox';
import withStyles from 'react-jss';
import { CONTROLS_WIDTH, BREAKING_POINT } from '../style';
import { Meteorite } from '../types';

const styles = {
  container: {
    display: 'flex',
    padding: '1rem',
    paddingTop: '4rem',
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
  mapBox: {
    background: 'lightgreen',
    flex: 1,
  },
};

interface Props {
  meteorite: Meteorite | null;
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
    const { classes, quitModal, meteorite } = this.props;

    return (
      <div className={classes.container} onClick={quitModal}>
        {meteorite && (
          <>
            <div className={classes.mapBox}>Map</div>
            <InfoBox {...{ meteorite }} />
          </>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(MapModal);
