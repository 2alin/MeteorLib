import React from 'react';
import Controls from '../containers/Controls'
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
      <Controls />
      <div>FOOTER</div>
    </div>
  );
};

export default withStyles(styles)(ControlsDrawer);
