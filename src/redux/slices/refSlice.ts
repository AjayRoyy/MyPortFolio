import { createSlice } from "@reduxjs/toolkit";

interface IntialState {
  value: {};
}

const initialState: IntialState = {
  value: {},
};

const RefSlice = createSlice({
  name: "Ref",
  initialState,
  reducers: {
    addRefToStore: (state, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          ...action.payload,
        },
      };
    },
  },
});

export const { addRefToStore } = RefSlice.actions;

export default RefSlice.reducer;
