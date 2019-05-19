import React from 'react';

const App: React.FC = () => {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <h1>Meteorites Explorer</h1>
      <div className="SideBar" />
    </div>
  );
};

export default App;
