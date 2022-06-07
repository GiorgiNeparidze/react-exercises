import React from "react";
import "./index.css";
import {incrementCounter, decrementCounter, resetCounter, store} from './state/CounterState'


store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(incrementCounter(1))
store.dispatch(decrementCounter(7))
store.dispatch(resetCounter())

export class App extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}
