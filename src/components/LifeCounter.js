import React from 'react';
import { neg, pos } from '../utils/index';

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
          { name === "" ? "Your" : `${name}'s`} Health: {this.state.value}
        </h2>
        { neg.map( (i) => {
          return (
            <button
              key={i}
              style={{cursor:'pointer'}}
              className='orange button'
              onClick={() => {this.setHealth(-i)}}
            >
              {`- ${i}`}
            </button>
            )
        })}

        {' '}
        
        { pos.map( (i) => {
          return (
            <button
              style={{cursor:'pointer'}}
              className='green button' 
              onClick={() => {this.setHealth(i)}}
            >
              {`+ ${i}`}
            </button>
          )
        })}
      </div>
    )
  }
}

export default LifeCounter;