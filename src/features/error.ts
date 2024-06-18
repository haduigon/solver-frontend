/* eslint-disable */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { CustomError } from '../types/types';

const initialError = {
  emailError: false,
  passwordError: false,
};

const errorSlice = createSlice({
  name: 'errorName',
  initialState: initialError,
  reducers: {
    setEmailError: (state, action: PayloadAction<boolean>) => {
      state.emailError = action.payload
    },
    setPasswordError: (state, action: PayloadAction<boolean>) => {
      state.passwordError = action.payload
    }
  },
});

export default errorSlice.reducer;
export const { setEmailError, setPasswordError } = errorSlice.actions;