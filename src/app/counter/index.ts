import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: {
    value: 0,
  },
  name: "counter",
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const {
  actions: { increment },
  reducer: counterReducer,
} = counterSlice;
