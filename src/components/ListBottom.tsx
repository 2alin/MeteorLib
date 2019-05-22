import React from 'react';
import withStyles from 'react-jss';
import { ListStatus } from '../types';

const styles = {
  container: {
    height: '60px',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  circle: {
    width: '36px',
    height: '36px',
    border: 'black solid 2px',
    borderRadius: '50%',
    borderColor: 'black transparent black transparent',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};

interface Props {
  status: ListStatus;
  classes: any;
}

function ListBottom({ status, classes }: Props) {
  return (
    <div className={classes.container}>
      {status === 'error' ? (
        <div className={classes.error}>Error</div>
      ) : status === 'loading' ? (
        <div className={classes.loading}>
          <div className={classes.circle} />
          Loading...
        </div>
      ) : status === 'empty' ? (
        <div className={classes.empty}>
          You got an empty list. Please change filter values.
        </div>
      ) : status === 'full' ? (
        <div className={classes.full}>
          You reached the end of the list. Try changing filter.
        </div>
      ) : (
        'Scroll to load more data'
      )}
    </div>
  );
}

export default withStyles(styles)(ListBottom);
