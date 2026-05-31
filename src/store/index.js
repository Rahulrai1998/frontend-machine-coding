// import { createStore } from "redux"; REDUX
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const INITIAL_VALUE = { counter: 0, showCounter: true }; REDUX

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

//PRIVACY SLICE

//REDUX
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...store, counter: store.counter + 1 };
//     case "DECREMENT":
//       return { ...store, counter: store.counter - 1 };
//     case "ADD":
//       return { ...store, counter: store.counter + Number(action.payload.data) };
//     case "SHOW-HIDE":
//       return { ...store, showCounter: !store.showCounter };
//     default:
//       return store;
//   }
//   return store;
// };

// const store = createStore(counterReducer); REDUX
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default store;
