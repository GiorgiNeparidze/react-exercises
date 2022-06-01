import React from "react";
import ClickCounter from "./ClickCounter";
// import Counter from "./Counter";
// import { HellowWorld } from "./HellowWorld";
// import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <HellowWorld />
        <Welcome name="John" age={17} />
        <Welcome name="John" age={37} />
        <Counter initial ={0}  incrementBy={1}  incrementEvery={1000}/> */}
        <ClickCounter />
      </div>
    );
  }
}
