import React from 'react';
import withStyles from 'react-jss';

const styles = {
  container: {
    height: '60px',
    padding: '0 1rem',
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
  error: boolean;
  isLoading: boolean;
  classes: any;
}

function ListBottom({ error, isLoading, classes }: Props) {
  return (
    <div className={classes.container}>
      {error ? (
        <div className={classes.error}>Error</div>
      ) : isLoading ? (
        <div className={classes.loading}>
          <div className={classes.circle} />
          Loading...
        </div>
      ) : (
        'Scroll to load more data'
      )}
    </div>
  );
}

export default withStyles(styles)(ListBottom);
