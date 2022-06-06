import React from "react";
import { useState, useEffect } from "react";

export default function ClickCounter(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    props.onCounterChange(counter)
  }, [counter]);

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
