import React from 'react';
import './App.scss';
import Route from './routes/index';

const App = () => {
  return (
    <div className="App">
      {/* All Routes is handle from Route Component */}
      <Route />
    </div>
  );
};

export default App;
