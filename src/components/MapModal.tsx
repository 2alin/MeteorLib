import React from 'react';
import InfoBox from './InfoBox';
import withStyles from 'react-jss';
import { CONTROLS_WIDTH, BREAKING_POINT, THEME } from '../style';
import { Meteorite } from '../types';
import closeIcon from '../assets/close.svg';

const styles = {
  container: {
    display: 'flex',
    padding: '1rem',
    paddingTop: '4rem',
    background: THEME.lightBg,
    // background: 'pink',
    position: 'fixed',
    zIndex: 10,
    top: 0,
    right: 0,
    bottom: 0,
    left: CONTROLS_WIDTH + 'px',
    transform: 'translateY(-100vh)',
    transition: 'transform 1s ease',
    '&.visible': {
      transform: 'translateY(0)',
    },

    [`@media (max-width: ${BREAKING_POINT}px)`]: {
      left: 0,
    },

    '& .closeButton': {
      position: 'absolute',
      top: '.5rem',
      right: '.5rem',
      width: '42px',
      height: '42px',
      cursor: 'pointer',
      background: `center / contain no-repeat url(${closeIcon})`,
    },
  },
  mapBox: {
    background: 'lightgreen',
    flex: 1,
  },
};

interface Props {
  meteorite: Meteorite | null;
  mapVisibility: boolean;
  quitModal: () => void;
  classes: any;
}

class MapModal extends React.Component<Props> {
  render() {
    const { classes, quitModal, meteorite, mapVisibility } = this.props;

    if (mapVisibility) {
      (document.querySelector('body') as HTMLBodyElement).classList.add(
        'noscroll'
      );
    } else {
      (document.querySelector('body') as HTMLBodyElement).classList.remove(
        'noscroll'
      );
    }

    return (
      <div className={`${classes.container} ${mapVisibility ? 'visible' : ''}`}>
        <div className={'closeButton'} onClick={quitModal} />
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
