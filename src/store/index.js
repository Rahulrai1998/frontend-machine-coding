import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0, showCounter: true };

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...store, counter: store.counter + 1 };
    case "DECREMENT":
      return { ...store, counter: store.counter - 1 };
    case "ADD":
      return { ...store, counter: store.counter + Number(action.payload.data) };
    case "SHOW-HIDE":
      return { ...store, showCounter: !store.showCounter };
    default:
      return store;
  }
  return store;
};

const store = createStore(counterReducer);
export default store;
