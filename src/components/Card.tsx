import React from 'react';
import { Meteorite } from '../types';
import withStyles from 'react-jss';
import {
  formatNumber,
  classifyMeteorite,
  genClassMeteoStyleSheet,
} from '../utilities/methods';
import markerIcon from '../assets/marker.svg';
import weightIcon from '../assets/weight.svg';
import { addIconRight, addIconLeft } from '../style';

const styles = {
  container: {
    maxWidth: '480px',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: '4px',
    color: 'white',
    transition: 'transform .25s ease',
    '&:hover': {
      transform: 'translate(8px, 0)',
    },
    ...genClassMeteoStyleSheet(),
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    '&:last-child': {
      paddingTop: '.5rem',
    },
    '& .bold': {
      fontWeight: 500,
    },
    '& .name': {
      fontSize: '1.15rem',
    },
    '& .mass': {
      ...addIconRight(weightIcon),
    },
    '& .geolocation': {
      ...addIconLeft(markerIcon),
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
    <div className={classes.container + ' ' + classifyMeteorite(recclass)}>
      <div className={classes.row}>
        <div className={classes.group}>
          <span className="year">
            {year ? new Date(year).getFullYear() : 'unknown'}
          </span>{' '}
          — <span className="fell">{fall}</span>
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
            `${formatNumber(Number(geolocation.latitude))}°, ${formatNumber(
              Number(geolocation.longitude)
            )}°`}
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(Card);
