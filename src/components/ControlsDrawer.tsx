import React from 'react';
import Controls from '../containers/Controls';
import withStyles from 'react-jss';
import githubIcon from '../assets/github.svg';
import { linkStyle, BREAKING_POINT, CONTROLS_WIDTH, THEME } from '../style';

const styles = {
  drawer: {
    height: '100vh',
    width: CONTROLS_WIDTH + 'px',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    background: THEME.darkBg,
    color: 'white',
    overflow: 'auto',
    [`@media (max-width: ${BREAKING_POINT}px)`]: {
      position: 'fixed',
      zIndex: 50,
      left: '-' + CONTROLS_WIDTH + 'px',
      transition: 'left 1s ease',
      '&.visible': {
        left: 0,
      },
    },
  },
  footer: {
    background: '#323640',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem .75rem',
    '& .brand': {
      marginBottom: '1rem',
      textAlign: 'left',
      fontVariant: 'small-caps',
      letterSpacing: '.1rem',
      fontWeight: '500',
      fontSize: '1.4rem',
    },
    '& .row': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
    },
    '& a': {
      ...linkStyle,
    },
    '& .author': {
      fontSize: '.8rem',
    },
    '& .sources > *': {
      marginRight: '.5rem',
    },
    '& .github': {
      display: 'inline-block',
      width: '1rem',
      height: '1rem',
      background: `center / contain no-repeat url(${githubIcon})`,
      fontSize: 0,
    },
    '& .nasa': {
      fontVariant: 'small-caps',
    },
  },
};

interface Props {
  drawerVisibility: boolean;
  classes: any;
}

const ControlsDrawer = ({ drawerVisibility, classes }: Props) => {
  return (
    <div className={`${classes.drawer} ${drawerVisibility ? 'visible' : ''}`}>
      <Controls />
      <div className={classes.footer}>
        <span className="brand">MeteorLib</span>
        <div className="row">
          <a
            href="https://github.com/2alin/MeteorLib"
            target="_blank"
            rel="noopener noreferrer"
            className="github sources"
          >
            github
          </a>
          {/* <div className="sources" /> */}
          <a
            href="https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh"
            target="_blank"
            rel="noopener noreferrer"
            className="nasa sources"
          >
            nasa
          </a>
          <div className="author">
            by{' '}
            <a
              href="https://twitter.com/2alin"
              target="_blank"
              rel="noopener noreferrer"
            >
              adilson
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ControlsDrawer);
