import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    data: [
      { id: 1, text: "iugeiufiwe", completed: false },

      { id: 2, text: "jiebswfuvweq;wdiqw", completed: false },
    ],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.data = [
        ...state.data,
        { id: v4(), completed: false, text: payload.text },
      ];
    },
    toggleTodo(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload.id
          ? { ...value, completed: !value.completed }
          : value
      );
    },
    removeTodo(state, { payload }) {
      state.data = state.data.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
