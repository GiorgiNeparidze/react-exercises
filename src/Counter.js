import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: this.props.initial,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.incrementBy,
      });
    }, this.props.incrementEvery);
  }

  render() {
    return <h1>Actual count is: {this.state.count}</h1>;
  }
}
