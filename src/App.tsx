import React from 'react';
import MainContent from './containers/MainContent';
import ControlsDrawer from './components/ControlsDrawer'
import withStyles from 'react-jss';

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
      <ControlsDrawer />
      <MainContent />
    </div>
  );
};

export default withStyles(styles)(App);
