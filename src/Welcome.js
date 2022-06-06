import React from "react";

export default function Welcome(props) {
  return (
    <div className="welcome">
      <p>Welcome {props.name}!</p>
    </div>
  );
}

Welcome.defaultProps = {
  name: "Giorgi",
};
