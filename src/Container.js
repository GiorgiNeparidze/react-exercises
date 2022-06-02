import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return <div className="container">
        <div>
            {this.props.title}
        </div>
        <div>
            {this.props.children}
        </div>
    </div>;
  }
}
