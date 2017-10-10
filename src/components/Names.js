import React from 'react';

// state = {yourName, opponentName}

class Names extends React.Component {



  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   let name = { ...this.state }
  //   this.props.submit(name)
  // }

  // handleChange = (e) => {
  //   let { target: { yourName, opponentName }} = e;
  // }

  render() {
    // let { yourName, opponentName } = this.state;
    return (
      <div>
        <br/>
        Enter both names then click Update Names
        <form>
          <input
            id="yourName"
            placeholder="Your Name"
          />
          <input
            id="opponentName"
            placeholder="Opponent's Name"
          />
          <button>Update Names</button>
        </form>
      </div>
    )
  }
}
export default Names;