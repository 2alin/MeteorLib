import React from 'react';
import withStyles from 'react-jss';
import { BREAKING_POINT } from '../style';
import caretIcon from '../assets/caret.svg';

const styles = {
  container: {
    display: 'none',
    position: 'fixed',
    top: '.5rem',
    left: '.5rem',
    zIndex: 100,
    width: '42px',
    height: '42px',
    cursor: 'pointer',
    background: `center / contain no-repeat url(${caretIcon})`,
    transform: 'rotate(-90deg)',
    transition: 'transform 1s ease',
    '&.exitMode': {
      transform: 'rotate(90deg)',
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
