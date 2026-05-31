import { createSlice } from "@reduxjs/toolkit";

//COUNTER SLICE
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    add: (state, action) => {
      state.count += action.payload.num;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
