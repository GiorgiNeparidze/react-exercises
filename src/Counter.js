import React from "react";
import {CounterDisplay} from "./CounterDisplay ";

export default class Counter extends React.Component {
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
    return(
      <div>
        <CounterDisplay count={this.state.count} />;
      </div>
    ) 
  }
}
