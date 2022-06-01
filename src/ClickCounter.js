import React from "react";
import { useState } from "react";

export default function ClickCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>You have clicked Button {counter} times.</h1>

      <button onClick={handleIncrement}>Count Click</button>
    </div>
  );
}
