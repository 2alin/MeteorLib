import React from 'react';
import axios from 'axios';

interface Meteorite {
  fall: string;
  geolocation: {
    latitude: string;
    longitude: string;
  };
  id: string;
  mass: string;
  name: string;
  nametype: string;
  recclass: string;
  reclat: string;
  reclong: string;
  year: string;
}

class ListContainer extends React.Component {
  state: {
    meteorites: Meteorite[];
  };
  constructor(props: {}) {
    super(props);
    this.state = {
      meteorites: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://data.nasa.gov/resource/gh4g-9sfh.json')
      .then(res =>
        this.setState({
          meteorites: res.data,
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    const { meteorites } = this.state;
    return (
      <div>
        <h1>This is a list</h1>
        <ul>
          {meteorites.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListContainer;
