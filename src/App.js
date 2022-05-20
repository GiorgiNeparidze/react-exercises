import React from "react";
import { HellowWorld } from "./HellowWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <HellowWorld />
        <Welcome />
      </div>
    );
  }
}
