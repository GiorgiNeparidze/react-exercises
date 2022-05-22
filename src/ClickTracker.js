import React, { Component } from "react";

export default class ClickTracker extends Component {
  state = {
    activeBtn: this.props.initialValue,
  };

  trackButton = (event) => {
    this.setState({
      activeBtn: event.target.id,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.activeBtn} was ultimate clicked!</h1>
        <button onClick={this.trackButton} id="I Button">
          I Button
        </button>
        <button onClick={this.trackButton} id="II Button">
          II Button
        </button>
        <button onClick={this.trackButton} id="III Button">
          III Button
        </button>
      </div>
    );
  }
}
