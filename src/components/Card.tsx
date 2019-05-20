import React from 'react';
import { Meteorite } from '../types';
import withStyles from 'react-jss';

const styles = {
  container: {
    background: 'lightgray',
    maxWidth: '480px',
    margin: '1rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  group: {
    // background: 'lightpink',
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      flex: 1,
    },
    '& > .geolocation': {
      flex: 2,
      display: 'flex',
      justifyContent: 'right',
    },
    '&:first-child': {
      marginBottom: '1rem',
    },
  },
  subgroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

interface Props {
  meteorite: Meteorite;
  classes: any;
}

function Card({ meteorite, classes }: Props) {
  const {
    name,
    recclass,
    fall,
    year,
    geolocation,
    id,
    nametype,
    mass,
  } = meteorite;
  // console.log(name);
  return (
    <div className={classes.container}>
      <div className={classes.group}>
        <span className="name">
          {name}
          {nametype === 'Relict' && ` [Relict]`}
        </span>
        <div className={classes.subgroup}>
          <span className="class">class: {recclass}</span>
          <span className="fall">{fall}</span>
        </div>
      </div>
      <div className={classes.group}>
        <span className="id">Id: {id}</span>
        <div className={classes.subgroup}>
          <span className="year">{new Date(year).getFullYear()}</span>
          <span className="mass">{mass}g</span>
        </div>
        <span className="geolocation">
          Geo:{' '}
          {geolocation
            ? `${geolocation.latitude}, ${geolocation.longitude}`
            : 'undefined'}
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(Card);
