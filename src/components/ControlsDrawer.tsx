import React from 'react';
import withStyles from 'react-jss';

const styles = {
  drawer: {
    width: '270px',
    display: 'flex',
    flexDirection: 'column',
  },
};

interface Props {
  classes: any;
}

const ControlsDrawer = ({ classes }: Props) => {
  return (
    <div className={classes.drawer}>
      <div>CONTROLS</div>
      <div>FOOTER</div>
    </div>
  );
};

export default withStyles(styles)(ControlsDrawer);
