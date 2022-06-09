import { createSlice } from "@reduxjs/toolkit";

export const todosState = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state.filter((todos) => todos.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, data } = action.payload;
      const todo = state.find((todo) => todo.id === id);

      for (let key in data) {
        todo[key] = data[key];
      }
    },
    clear: (state, action) => [],
  },
});

//export const store = createStore(todosState.reducer)
