import React from "react";
// import { CounterDisplay } from "./CounterDisplay ";
import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  }, [counter]);

  return (
    <div>
      <span>
        Let's Count: {counter}
      </span>
    </div>
  );
}
