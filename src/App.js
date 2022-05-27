import React from "react";
// import ToDoList from "./ToDoList";
// import ClickCounter from "./ClickCounter";
// import Counter from "./Counter";
// import { HellowWorld } from "./HellowWorld";
// import { Welcome } from "./Welcome";
// import ClickTracker from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
// import UncontrolledLogin from "./UncontrolledLogin ";
import "./index.css";
import Container from "./Container";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <HellowWorld /> */}
        {/* <Welcome name="John" age={17} />
        <Welcome name="John" age={37} /> */}
        {/* <Counter initial ={0}  incrementBy={1}  incrementEvery={1000}/>
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome /> */}
        <Container title={"Look at this uggly form :D"}>
          <Login />
        </Container>
        {/* <UncontrolledLogin /> */}
        {/* <ToDoList /> */}
      </div>
    );
  }
}
