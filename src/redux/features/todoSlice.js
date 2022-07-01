import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoAction: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodoAction: (state, action) => {
      state.todos = state.todos.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

export const { addTodoAction, deleteTodoAction } = todoSlice.actions;
export default todoSlice.reducer;
