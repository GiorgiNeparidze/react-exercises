import React from "react";
import Welcome from "./Welcome";
import "./index.css";
import { Routes, Route } from "react-router-dom";

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Welcome name="John" age={17} />} />
      </Routes>
    );
  }
}
