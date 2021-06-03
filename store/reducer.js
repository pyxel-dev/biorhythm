import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD

const initialState = {
  birthday: "",
=======
import { set } from "../lib/storage";

const initialState = {
  birthday: "",
  range: 7,
  startDate: "",
>>>>>>> refactor(*): new version
};

export const rootSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addBirthday: (state, action) => {
<<<<<<< HEAD
      state.birthday = action.payload;
    },
  },
});

export const { addBirthday } = rootSlice.actions;
export const birthdaySelector = (state) => state.birthday;
=======
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
>>>>>>> refactor(*): new version

export default rootSlice.reducer;
