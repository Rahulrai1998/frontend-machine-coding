import { createSlice } from "@reduxjs/toolkit";

//PRIVACY SLICE
const privacySlice = createSlice({
  name: "privacy",
  initialState: { showCounter: true },
  reducers: {
    toggleShow: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const privacyActions = privacySlice.actions;
export default privacySlice;
