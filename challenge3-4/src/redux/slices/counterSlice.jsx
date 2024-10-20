import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  rate: 0,
};

export const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    updateRate: (state, action) => {
      state.rate = action.payload.newRate;
    },

    decrementBy: (state, action) => {
      state.counter -= action.payload.decrement;
    },
    incrementBy: (state, action) => {
      state.counter += parseInt(action.payload.rate);
    },
  },
});

export const { updateRate, incrementBy, decrementBy } = counterSlice.actions;
export default counterSlice.reducer;
