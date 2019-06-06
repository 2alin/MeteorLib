import React from 'react';
import { Meteorite } from '../types';
import withStyles from 'react-jss';
import { formatNumber, classifyMeteorite } from '../utilities/methods';
import markerIcon from '../assets/marker.svg';
import weightIcon from '../assets/weight.svg';
import { bgCardStyle, addIconRight, addIconLeft } from '../style';

const styles = {
  container: {
    width: '360px',
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
    ...bgCardStyle(),
    [`@media (max-width: 390px)`]: {
      width: '310px',
    },
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
  showMap: (meteorite: Meteorite) => void;
  classes: any;
}

function Card({ meteorite, showMap, classes }: Props) {
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

  return (
    <div
      className={classes.container + ' ' + classifyMeteorite(recclass)}
      onClick={() => {
        showMap(meteorite);
      }}
    >
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
          {mass ? `${formatNumber(Number(mass))}\u2009g` : 'unknown'}
        </span>
        <span className="geolocation">
          {geolocation
            ? `${formatNumber(Number(geolocation.latitude))}°, ${formatNumber(
                Number(geolocation.longitude)
              )}°`
            : 'unknown'}
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(Card);
