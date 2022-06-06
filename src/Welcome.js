import React from "react";
import { Age } from "./Age";

export default function Welcome(props) {
  return (
    <div className="welcome">
      <p>Welcome {props.name}!</p>
      <Age age={props.age} />
    </div>
  );
}

Welcome.defaultProps = {
  name: "Giorgi",
};
