import React from 'react';
import withStyles from 'react-jss';
import { BREAKING_POINT } from '../style';

const styles = {
  container: {
    display: 'none',
    position: 'fixed',
    top: '.5rem',
    left: '.5rem',
    zIndex: 100,
    background: 'white',
    width: '42px',
    height: '42px',
    '&.menuMode': {
      background: 'pink',
    },
    '&.exitMode': {
      background: 'blue',
    },
    [`@media (max-width: ${BREAKING_POINT}px)`]: {
      display: 'block',
    },
  },
};

interface Props {
  drawerVisibility: boolean;
  handleClick: (drawerVisibility: boolean) => void;
  classes: any;
}

function ToggleMenu({ drawerVisibility, handleClick, classes }: Props) {
  return (
    <div
      className={`${classes.container} ${
        drawerVisibility ? 'exitMode' : 'menuMode'
      }`}
      onClick={() => {
        handleClick(!drawerVisibility);
      }}
    />
  );
}

export default withStyles(styles)(ToggleMenu);
