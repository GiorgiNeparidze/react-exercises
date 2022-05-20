import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
      </div>
    );
  }
}

// we can set props by default like code below
// is that only for javascript class specs or anything react mixed ?

Welcome.defaultProps = {
  name: "Giulia"
}

