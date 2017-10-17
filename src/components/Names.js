import React from 'react';

class Names extends React.Component {

  state = { yourName: '', oppName: '' };

  handleSubmit = e => {
    e.preventDefault();
    const { yourName, oppName, name } = this.state;
    this.setState({ yourName: yourName })
    this.setState({ oppName: oppName })
    this.setState({ name: '' }) 
  }

  render() {
    const { yourName, oppName, name } = this.state;
    
    return (
      <div>
        <br/>
        Enter both names then click Update Names
        <form onSubmit={this.handleSubmit}>
          <input
            value={name}
            id="yourName"
            placeholder="Your Name"
            onChange={ e => this.setState({ yourName: e.target.value }) }
          />
          <br/>
          <input
            value={name}
            id="opponentName"
            placeholder="Opponent's Name"
            onChange={ e => this.setState({ oppName: e.target.value }) }
          />
          <br/>
          <button>Update Names</button>
        </form>
      </div>
    )
  }
}
export default Names;