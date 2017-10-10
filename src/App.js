import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCounter from './components/LifeCounter';
import OpponentCounter from './components/OpponentCounter';
import Names from './components/Names';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="MTG mana - white logo" />
          <h2>TJ's React Practice</h2>
        </div>
        <div>
          <h2> Magic the Gathering: Life Counter</h2>
          <hr/>
          <Names />
          <LifeCounter />
          <OpponentCounter />
        </div>
      </div>
    );
  }
}

export default App;
