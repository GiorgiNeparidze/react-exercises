import React, { Component } from "react";

export default class ClickCounter extends Component {
  state = {
    clickCount: 0,
  };

  incrementer = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
    });
  };

  render() {
    return (
      <div>
        {this.state.clickCount >= 1 && (
          <h1>You have clicked Button {this.state.clickCount} times.</h1>
        )}
        <button onClick={this.incrementer}>Count Click</button>
      </div>
    );
  }
}
