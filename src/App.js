import React from "react";
import { HellowWorld } from "./HellowWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <HellowWorld />
         {/* we can embedd any valid JSX expression needed by method below  */}
        <Welcome name={<strong>Pippo</strong>} age={22} />
      </div>
    );
  }
}
