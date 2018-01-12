import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCounter from './components/LifeCounter';
import OpponentCounter from './components/OpponentCounter';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="MTG mana - white logo" />
          <h2> Magic the Gathering</h2>
        </div>
        <div>
          <h2>Life Counter</h2>
          <hr/>
          <LifeCounter />
          <br />
          <OpponentCounter />
        </div>
      </div>
    );
  }
}

export default App;
