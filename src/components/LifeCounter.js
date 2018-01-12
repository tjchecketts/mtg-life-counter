import React from 'react';

class LifeCounter extends React.Component {
  state = { value: 20, name: '' }
  
  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  setHealth = (value) => {
    this.setState({ value: this.state.value + value})
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
        <h2>
          { name === "" ? "Your" : `${name}'s`} Health: 
          {this.state.value}
        </h2>
        <button 
          style={{cursor:'pointer'}}
          className='orange button'
          onClick={() => {this.setHealth(-3)}}
        >
          - 3
        </button>
        <button 
          style={{cursor:'pointer'}}
          className='orange button' 
          onClick={() => {this.setHealth(-2)}}
        >
          - 2
        </button>
        <button 
          style={{cursor:'pointer'}}
          className='orange button' 
          onClick={() => {this.setHealth(-1)}}
        >
          - 1
        </button>
        {' '}
        <button 
          style={{cursor:'pointer'}}
          className='green button' 
          onClick={() => {this.setHealth(1)}}
        >
          + 1
        </button>
        <button 
          style={{cursor:'pointer'}}
          className='green button' 
          onClick={() => {this.setHealth(2)}}
        >
          + 2
        </button>
        <button 
          style={{cursor:'pointer'}}
          className='green button' 
          onClick={() => {this.setHealth(3)}}
        >
          + 3
        </button>
      </div>
    )
  }
}

export default LifeCounter;