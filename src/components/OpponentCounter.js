import React from 'react';

class OpponentCounter extends React.Component {
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
    return (
      <div>
        <input
          placeholder="Opponent's Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <h2>{ this.state.name === "" ? "Opponent" : `${this.state.name}` }'s Health: 
            {this.state.value}
        </h2>
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

export default OpponentCounter;