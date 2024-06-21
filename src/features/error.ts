/* eslint-disable */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { CustomError } from '../types/types';

type ErrorState = {
  emailError: boolean,
  passwordError: boolean,
  errorMessage: null | string,
}

const initialError: ErrorState = {
  emailError: false,
  passwordError: false,
  errorMessage: null,
};

const errorSlice = createSlice({
  name: 'errorName',
  initialState: initialError,
  reducers: {
    setEmailError: (state: ErrorState, action: PayloadAction<boolean>) => {
      state.emailError = action.payload
    },
    setPasswordError: (state, action: PayloadAction<boolean>) => {
      state.passwordError = action.payload
    },
    // setErrorMessage: (state, action: PayloadAction<string | null>) => {
    //   state.errorMessage = action.payload
    // }
  },
});

export default errorSlice.reducer;
export const { setEmailError, setPasswordError } = errorSlice.actions;