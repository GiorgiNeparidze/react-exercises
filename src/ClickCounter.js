import React from "react";
import { useState, useEffect } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter);
  }, [counter]);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  const HandleResset = () => {
    setCounter(0);
  };

  return {
    counter: counter,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: HandleResset,
  };
}

export default function ClickCounter() {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>You have clicked Button {counter} times.</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Resset</button>
    </div>
  );
}
