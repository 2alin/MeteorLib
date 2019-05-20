import React from 'react';
import Card from './Card';
import { Meteorite } from '../types';
import withStyles from 'react-jss';

const styles = {
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
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
        <li key={meteorite.id}>
          <Card {...{ meteorite }} />
        </li>
      ))}
    </ul>
  );
}

export default withStyles(styles)(List);
