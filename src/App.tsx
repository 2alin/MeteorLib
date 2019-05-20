import React from 'react';
import MeteoritesList from './containers/MeteoritesList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Meteorites Explorer</h1>
      <div className="SideBar" />
      <MeteoritesList />
    </div>
  );
};

export default App;
