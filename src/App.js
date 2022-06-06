import React from "react";
import Counter from "./Counter";
import Welcome from "./Welcome";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Welcome name="John" />} />
          <Route path="counter" element={<Counter />} />
          <Route path="users/username" element={<ShowGithubUser />} />
        </Routes>
        <Link to={"/"}>Welcome !</Link>
        <Link to={"/counter"}>Count !</Link>
        <Link to={"users/username"}>Github User IS</Link>
      </div>
    );
  }
}
