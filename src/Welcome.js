import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        <p>Your age is {this.props.age}.</p>
      </div>
    );
  }
}

// we can set props by default like code below
// is that only for javascript class specs or anything react mixed ?

Welcome.defaultProps = {
  name: "Giorgi",
  age: 22
}

