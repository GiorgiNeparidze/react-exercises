import React from "react";
// import GithubUser from "./GithubUser";
// import GithubUserList from "./GithubUserList";
// import Counter from "./Counter";
// import Counter from "./Counter";
// import ClickCounter from "./ClickCounter";
// import Counter from "./Counter";
// import { HellowWorld } from "./HellowWorld";
// import { Welcome } from "./Welcome";
// import ClickTracker from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import  Login  from "./Login";
import { useCounter } from "./useCounter";

export function App({ initialvalue = 0 }) {
  const { counter, increment, decrement, reset } = useCounter(initialvalue);

  return (
    <div>
      <h1>You have clicked counter {counter} times!</h1>
      <button onClick={increment}>Increment!</button>
      <button onClick={decrement}>Decrement!</button>
      <button onClick={reset}>Reset!</button>
    </div>
  );
}
