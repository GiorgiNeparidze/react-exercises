import React from "react";
import { Age } from "./Age";

export default function Welcome() {
  return (
    <div className="welcome">
      <p>Welcome {this.props.name}!</p>
      <Age age={this.props.age} />
    </div>
  );
}

Welcome.defaultProps = {
  name: "Giorgi",
};
