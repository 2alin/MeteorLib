import React from 'react';
import withStyles from 'react-jss';
import { Meteorite } from '../types';
import { formatNumber } from '../utilities/methods';
import { THEME } from '../style';

const styles = {
  container: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    background: THEME.darkBg,
    color: 'white',
    '& td': {
      paddingBottom: '1rem',
    },

    '& .fieldName': {
      paddingRight: '1.25rem',
    },
    '& .fieldValue': {
      fontWeight: 500,
    },
  },
};

interface Props {
  meteorite: Meteorite;
  classes: any;
}

function InfoBox({ meteorite, classes }: Props) {
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
    <div className={classes.container}>
      <table>
        <tbody>
          <tr>
            <td className="fieldName">id</td>
            <td className="fieldValue">{id}</td>
          </tr>
          <tr>
            <td className="fieldName">name</td>
            <td className="fieldValue">{name}</td>
          </tr>
          <tr>
            <td className="fieldName">nametype</td>
            <td className="fieldValue">{nametype}</td>
          </tr>
          <tr>
            <td className="fieldName">recclass</td>
            <td className="fieldValue">{recclass}</td>
          </tr>
          <tr>
            <td className="fieldName">mass</td>
            <td className="fieldValue">
              {mass ? `${formatNumber(Number(mass))}\u2009g` : 'unknown'}
            </td>
          </tr>
          <tr>
            <td className="fieldName">fall</td>
            <td className="fieldValue">{fall}</td>
          </tr>
          <tr>
            <td className="fieldName">year</td>
            <td className="fieldValue">
              {year ? new Date(year).getFullYear() : 'unknown'}
            </td>
          </tr>
          <tr>
            <td className="fieldName">latitude</td>
            <td className="fieldValue">
              {geolocation
                ? `${formatNumber(Number(geolocation.latitude))}°`
                : 'unknown'}
            </td>
          </tr>
          <tr>
            <td className="fieldName">longitude</td>
            <td className="fieldValue">
              {geolocation
                ? `${formatNumber(Number(geolocation.longitude))}°`
                : 'unknown'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default withStyles(styles)(InfoBox);
