import React from "react";
// import ToDoList from "./ToDoList";
// import ClickCounter from "./ClickCounter";
// import Counter from "./Counter";
// import { HellowWorld } from "./HellowWorld";
// import  Welcome  from "./Welcome";
// import ClickTracker from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import UncontrolledLogin from "./UncontrolledLogin ";
import "./index.css";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { LanguageContext } from "./LanguageContext";
// import Container from "./Container";
import Sum from "./Sum";

export class App extends React.Component {
  // state = {
  //   language: "ru",
  // };

  // changeLanguage = (event) => {
  //   this.setState({
  //     language: event.target.value,
  //   });
  // };

  render() {
    return (
      <div>
        {/* <HellowWorld /> */}
        {/* <Welcome name="John" age={17} />} */}
        {/* <Welcome name="John" age={37} /> */}
        {/* <Counter initial ={0}  incrementBy={1}  incrementEvery={1000}/>
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome /> */}
        {/* <Container title={"Look at this uggly form :D"}>
          <Login />
        </Container> */}
        {/* <UncontrolledLogin /> */}
        {/* <ToDoList
          render={(listItems, HandleRemove) => {
            return listItems.map((item, i) => (
              <li key={i}>
                {item}{" "}
                <button onClick={() => HandleRemove(i)}>Remove</button>
              </li>
            ));
          }}
        /> */}
        {/* <DisplayLanguage /> */}
        {/* <div>
          <select onChange={this.changeLanguage} value={this.state.language}>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
          <div>
            <LanguageContext.Provider value={this.state.language}>
              <DisplayLanguage />
            </LanguageContext.Provider>
          </div>
      </div>*/}
        <Sum nums={[1, 5, 7, 8, 9]} />
      </div>
    );
  }
}
