import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: { title: "" },
  reducers: {
    setCategory(state, action) {
      state.title = action.payload;
    },
  },
});

export const titleActions = titleSlice.actions;

export default titleSlice;
