import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        {18 < this.props.age && this.props.age < 65 && <Age age={this.props.age} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Giorgi",
};
