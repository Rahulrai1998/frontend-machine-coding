// import { createStore } from "redux"; REDUX
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import privacySlice from "./privacySlice";

// const INITIAL_VALUE = { counter: 0, showCounter: true }; REDUX


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
    privacy: privacySlice.reducer,
  },
});

export default store;
