import React from 'react';

class LifeCounter extends React.Component {
  state = { value: 20, name: '' }
  
  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

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
    const name = this.state.name;

    return (
      <div>
        <input
          placeholder="Your Name"
          value={name}
          onChange={this.handleChange}
        />
        <h2>{ name === "" ? "Your" : `${name}'s`} Health: {this.state.value}</h2>
      <button 
        style={{cursor:'pointer'}}
        className='orange button'
        onClick={this.minusThree}>
        - 3
      </button>
      <button 
        style={{cursor:'pointer'}}
        className='orange button' 
        onClick={this.minusTwo}>
        - 2
      </button>
      <button 
        style={{cursor:'pointer'}}
        className='orange button' 
        onClick={this.minusOne}>
        - 1
      </button>
      {' '}
      <button 
        style={{cursor:'pointer'}}
        className='green button' 
        onClick={this.plusOne}>
        + 1
      </button>
      <button 
        style={{cursor:'pointer'}}
        className='green button' 
        onClick={this.plusTwo}>
        + 2
      </button>
      <button 
        style={{cursor:'pointer'}}
        className='green button' 
        onClick={this.plusThree}>
        + 3
      </button>
      </div>
    )
  }
}

export default LifeCounter;