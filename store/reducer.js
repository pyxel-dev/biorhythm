import { createSlice } from "@reduxjs/toolkit";
import { set } from "../lib/storage";

const initialState = {
  birthday: "",
  range: 7,
  startDate: "",
};

export const rootSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addBirthday: (state, action) => {
      set("birthday", action.payload);
      state.birthday = action.payload;
    },
    updateRange: (state, action) => {
      set("range", action.payload);
      state.range = action.payload;
    },
    startDateFrom: (state, action) => {
      set("startDate", action.payload);
      state.startDate = action.payload;
    },
  },
});

export const { addBirthday, updateRange, startDateFrom } = rootSlice.actions;

export const birthdaySelector = (state) => state.birthday;
export const rangeSelector = (state) => state.range;
export const startDateSelector = (state) => state.startDate;

export default rootSlice.reducer;
