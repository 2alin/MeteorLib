import React from 'react';
import { Meteorite } from '../types';
import withStyles from 'react-jss';
import { formatNumber } from '../utilities/methods';

const styles = {
  container: {
    background: 'white',
    maxWidth: '480px',
    margin: '1rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    boxShadow: '0 0 2px',
    transition: 'transform .25s ease',
    '&:hover': {
      transform: 'translate(8px, 0)'
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    '&:last-child': {
      marginBottom: 0,
    },
    '& .bold': {
      fontWeight: 500,
    },
    '& .name': {
      fontSize: '1.15rem',
    },
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
      <div className={classes.row}>
        <div className={classes.group}>
          <span className="year">{new Date(year).getFullYear()}</span> —{' '}
          <span className="fell">{fall}</span>
        </div>
        <span className="id">Id: {id}</span>
      </div>
      <div className={classes.row}>
        <span className="name bold">
          {name}
          {nametype === 'Relict' && ` [relict]`}
        </span>
        <span className="class bold">{recclass}</span>
      </div>
      <div className={classes.row}>
        <span className="mass">
          {mass && `${formatNumber(Number(mass))}\u2009g`}
        </span>
        <span className="geolocation">
          {geolocation &&
            `geo: ${formatNumber(
              Number(geolocation.latitude)
            )}°, ${formatNumber(Number(geolocation.longitude))}°`}
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(Card);
