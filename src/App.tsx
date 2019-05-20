import React from 'react';
import MainContent from './containers/MainContent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Meteorites Explorer</h1>
      <div className="SideBar" />
      <MainContent />
    </div>
  );
};

export default App;
