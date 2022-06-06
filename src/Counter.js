import React from "react";
import { CounterDisplay } from "./CounterDisplay ";

export default class Counter extends React.Component {
  state = {
    count: this.props.initial ?? 0,
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        count: this.state.count + (this.props.incrementBy ?? 1),
      });
    }, this.props.incrementEvery ?? 1000);
  };
  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />;
      </div>
    );
  }
}
