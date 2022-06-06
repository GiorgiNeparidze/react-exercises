import React from "react";
import Counter from "./Counter";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";
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
