import React from "react";
import { combineReducers, createStore } from "redux";
import "./index.css";
import {incrementCounter, decrementCounter, resetCounter, countReducer} from './state/CounterState'
import { todosState } from "./state/TodoReducer"


const rootReducer = combineReducers({
  counter: countReducer,
  todo: todosState.reducer
})

const store = createStore(rootReducer)


store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(todosState.actions.add({id:1, titele:"redux", completed:false}))
store.dispatch(todosState.actions.add({id:2, titele:"typescript", completed:false}))
store.dispatch(todosState.actions.remove({id:1, titele:"typescript", completed:false}))
store.dispatch(todosState.actions.edit({id:2, data:{id:1}}))
store.dispatch(todosState.actions.remove(1))
store.dispatch(incrementCounter(10))
store.dispatch(decrementCounter(3))
store.dispatch(resetCounter())

export class App extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}
