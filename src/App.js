import React from "react";
import Counter from "./Counter";
import Welcome from "./Welcome";

import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          {/* <Route path="/" element={<Welcome name="John" />} /> */}
          <Route path="counter" element={<Counter />} />
          <Route path="users" element={<GithubUserList />}>
            <Route index element={<h2>Add a user and select it!</h2>} />
            <Route path=":username" element={<ShowGithubUser />} />
           
          </Route>
        </Routes>
        <Link to={"/"}>Welcome !</Link>
        <Link to={"/counter"}>Count !</Link>
        <Link to={"users"}>Github User IS</Link>
      </div>
    );
  }
}
