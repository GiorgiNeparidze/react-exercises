import React from "react";
import { HellowWorld } from "./HellowWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <HellowWorld />
        <Welcome name={<strong>Giorgi</strong>} age={22} />
        <Welcome name="John" age={37} />
      </div>
    );
  }
}
