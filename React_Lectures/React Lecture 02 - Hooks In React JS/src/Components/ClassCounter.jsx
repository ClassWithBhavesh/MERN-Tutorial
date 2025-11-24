import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
        <div>Current Count : {this.state.count}</div>
        <br />
        <button onClick={this.increment}> + </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.decrement}> - </button>
      </>
    );
  }
}

export default ClassCounter;
