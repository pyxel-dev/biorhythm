import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  birthday: ''
};

export const rootSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    addBirthday: (state, action) => {
      state.birthday = action.payload
    }
  }
});

export const { addBirthday } = rootSlice.actions;
export const birthdaySelector = (state) => state.birthday;

export default rootSlice.reducer;