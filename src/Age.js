import React from "react";

export class Age extends React.Component {
  render() {
    return (
      <div>
        {this.props.age > 18 && <span>Your age is {this.props.age}</span>}
        {this.props.age < 18 && <span>"You are very young!"</span>}
      </div>
    )
  }
}
