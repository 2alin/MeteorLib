import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import withStyles from 'react-jss';
import { Meteorite } from '../types';

const styles = {
  container: {
    flex: '1',
    background: 'lightgreen',
    '& .leaflet-container': {
      width: '100%',
      height: '100%',
    },
  },
};

interface Props {
  meteorite: Meteorite;
  classes: any;
}

function MapBox({ meteorite, classes }: Props) {
  const latitude = Number(meteorite.geolocation.latitude);
  const longitude = Number(meteorite.geolocation.longitude);

  return (
    <div className={classes.container}>
      <LeafletMap
        center={[latitude, longitude]}
        zoom={5}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup>{meteorite.name}</Popup>
        </Marker>
      </LeafletMap>
    </div>
  );
}

export default withStyles(styles)(MapBox);
