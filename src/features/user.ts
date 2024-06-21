/* eslint-disable */
import {
  createAsyncThunk, createSlice,
  // isAnyOf,
  // isAsyncThunkAction,
  isFulfilled,
  isPending,
  isRejected
} from "@reduxjs/toolkit";
import { logInWithEmailAndPassword, createUserEmailPassword } from '../firebase/firebase';

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
    builder.addMatcher(
      isPending(userAuthEmailPassword, userCreateEmailPassword),
      (state) => {
        state.isLoading = true
        state.hasError = false
        console.log('admatcher pending')
      })
    builder.addMatcher(
      isFulfilled(userAuthEmailPassword, userCreateEmailPassword),
      (state) => {
        console.log('admatcher fullfilled')
        state.isLoading = false
        state.hasError = false
      })
    builder.addMatcher(
      isRejected(userAuthEmailPassword, userCreateEmailPassword),
      (state) => {
        console.log('admatcher fullfilled')
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
export const userCreateEmailPassword = createAsyncThunk("user/create", (cridentials: {
  email: string,
  password: string,
}) => {
  return createUserEmailPassword(cridentials.email, cridentials.password)
})