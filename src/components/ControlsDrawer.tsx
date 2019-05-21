import React from 'react';
import withStyles from 'react-jss';
import { Options } from '../types';

const styles = {
  drawer: {
    display: 'flex',
    width: '270px',
  },
};

interface Props {
  options: Options;
  classes: any;
}

class ControlsDrawer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return <div className={classes.drawer}>I'm a side bar</div>;
  }
}

export default withStyles(styles)(ControlsDrawer);
