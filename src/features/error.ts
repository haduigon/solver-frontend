/* eslint-disable */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CustomError } from '../types/types';

const initialError: CustomError = {
  errorName: "",
};

const errorSlice = createSlice({
  name: 'errorName',
  initialState: initialError,
  reducers: {
    setError: (state, action: PayloadAction<CustomError["errorName"]>) => {
      state.errorName = action.payload
    }
  },
});

export default errorSlice.reducer;
export const { setError } = errorSlice.actions;