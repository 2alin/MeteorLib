import React from 'react';
import MainContent from './containers/MainContent';
import ControlsDrawer from './containers/ControlsDrawer'
import withStyles from 'react-jss';
import ToggleDrawer from './containers/ToggleDrawer';

const styles = {
  app: {
    display: 'flex',
  },
};

interface Props {
  classes: any;
}

const App = ({ classes }: Props) => {
  return (
    <div className={classes.app}>
      <ToggleDrawer />
      <ControlsDrawer />
      <MainContent />
    </div>
  );
};

export default withStyles(styles)(App);
