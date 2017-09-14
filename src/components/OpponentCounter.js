import React from 'react';

class OpponentCounter extends React.Component {
  state = { value: 20 }
  
  // changeHealth = (value, direction) => {
  //   if(direction = 'add') {
  //     this.setState({ value: this.state + value})
  //   } else {
  //     this.setState({ value: this.state - value})
  //   }
  // }

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
        <h2>Opponent's Health: {this.state.value}</h2>
        <button 
          className='orange button'
          // onClick={this.setHealth(3, 'add')}>
          onClick={this.minusThree}>
          - 3
        </button>
        <button 
          className='orange button' 
          onClick={this.minusTwo}>
          - 2
        </button>
        <button 
          className='orange button' 
          onClick={this.minusOne}>
          - 1
        </button>
        {' '}
        <button 
          className='green button' 
          onClick={this.plusOne}>
          + 1
        </button>
        <button 
          className='green button' 
          onClick={this.plusTwo}>
          + 2
        </button>
        <button 
          className='green button' 
          onClick={this.plusThree}>
          + 3
        </button>
      </div>
    )
  }
}

export default OpponentCounter;