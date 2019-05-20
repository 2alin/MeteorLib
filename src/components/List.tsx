import React from 'react';
import { Meteorite } from '../types';
import withStyles from 'react-jss';

const styles = {
  list: {
    margin: 0,
  },
};

interface Props {
  list: Meteorite[];
  classes: any;
}

function List({ list, classes }: Props) {
  return (
    <ul className={classes.list}>
      {list.map(meteorite => (
        <li key={meteorite.id}>{meteorite.name}</li>
      ))}
    </ul>
  );
}

export default withStyles(styles)(List);
