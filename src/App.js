import React from "react";
import Counter from "./Counter";
import { HellowWorld } from "./HellowWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <HellowWorld />
        <Welcome name="John" age={17} />
        <Welcome name="John" age={37} />
        <Counter />
      </div>
    );
  }
}
