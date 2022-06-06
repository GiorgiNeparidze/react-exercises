import React from "react";
import Counter from "./Counter";
import "./index.css";
import GithubUser from "./GithubUser";

export class App extends React.Component {
  render() {
    return (
      <div>
        <GithubUser username={"GiorgiNeparidze"}/>
      </div>
    );
  }
}
