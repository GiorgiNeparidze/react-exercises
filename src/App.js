import React from "react";

import Welcome from "./Welcome";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";


export class App extends React.Component {
  render() {
    return (
      <Routes>

        <Route path='/' element={<Welcome name="John" />} />
        <Route path="users/:username" element={<ShowGithubUser />}/>
      </Routes>
    );
  }
}
