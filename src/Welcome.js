import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        <Age age={this.props.age} />
      </div>
    );
  }
}

// we can set props by default like code below
// is that only for javascript class specs or anything react mixed ?

Welcome.defaultProps = {
  name: "Giorgi",
}

