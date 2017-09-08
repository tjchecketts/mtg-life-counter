import React from 'react';

class LifeCounter extends React.Component {
  state = { value: 20 }
  
  minusThree = () => {
    this.setState({ value: this.state.value - 3 })
  }

  minusTwo = () => {
    this.setState({ value: this.state.value - 2 })
  }

  minusOne = () => {
    this.setState({ value: this.state.value - 1 })
  }

  plusOne = () => {
    this.setState({ value: this.state.value + 1 })
  }

  plusTwo = () => {
    this.setState({ value: this.state.value + 2 })
  }

  plusThree = () => {
    this.setState({ value: this.state.value + 3 })
  }

  render() {
    return (
      <div>
        <h2> Magic the Gathering Life Counter</h2>
        <h2>Current Health: {this.state.value}</h2>
        <button style={{backgroundColor: 'orange'}} onClick={this.minusThree}>- 3</button>
        <button style={{backgroundColor: 'orange'}} onClick={this.minusTwo}>- 2</button>
        <button style={{backgroundColor: 'orange'}} onClick={this.minusOne}>- 1</button>
        {' '}
        <button style={{backgroundColor: 'lightgreen'}} onClick={this.plusOne}>+ 1</button>
        <button style={{backgroundColor: 'lightgreen'}} onClick={this.plusTwo}>+ 2</button>
        <button style={{backgroundColor: 'lightgreen'}} onClick={this.plusThree}>+ 3</button>
      </div>
    )
  }
}

export default LifeCounter;