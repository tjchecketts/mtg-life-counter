import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCounter from './components/LifeCounter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TJ's React Practice</h2>
        </div>
        <LifeCounter />
      </div>
    );
  }
}

export default App;
