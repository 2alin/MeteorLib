import React from 'react';
import { Options } from '../types';
import withStyles from 'react-jss';
const styles = {};

interface Props {
  options: Options;
  classes: any;
}
class Controls extends React.Component<Props> {}

export default withStyles(styles)(Controls);
