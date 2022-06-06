import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import {Welcome} from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    );
  }
}
