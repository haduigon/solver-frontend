/* eslint-disable */
import {
  // PayloadAction,
  createAsyncThunk, createSlice
} from "@reduxjs/toolkit";
// import { client } from "../helpers/utils";
import { logInWithEmailAndPassword } from '../firebase/firebase';

type User = {
  isLoading: boolean,
  hasError: boolean,
}

const initialUser: User = {
  isLoading: false,
  hasError: false,
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userAuthEmailPassword.pending, (state) => {
      state.isLoading = true
      state.hasError = false
    })
    builder.addCase(userAuthEmailPassword.fulfilled, (state) => {
      state.isLoading = false
      state.hasError = false
    })
    builder.addCase(userAuthEmailPassword.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
  }
})
export default userSlice.reducer;

export const userAuthEmailPassword = createAsyncThunk("user/auth", (cridentials: {
  email: string,
  password: string,
}) => {
  return logInWithEmailAndPassword(cridentials.email, cridentials.password)
})