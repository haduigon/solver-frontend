/* eslint-disable */
import {
  createAsyncThunk, createSlice,
  isFulfilled,
  isPending,
  isRejected
} from "@reduxjs/toolkit";
import { logInWithEmailAndPassword, createUserEmailPassword, logout } from '../firebase/firebase';

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
      })
    builder.addMatcher(
      isFulfilled(userAuthEmailPassword, userCreateEmailPassword),
      (state) => {
        state.isLoading = false
        state.hasError = false
      })
    builder.addMatcher(
      isRejected(userAuthEmailPassword, userCreateEmailPassword),
      (state) => {
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
});

export const userCreateEmailPassword = createAsyncThunk("user/create", (cridentials: {
  email: string,
  password: string,
}) => {
  return createUserEmailPassword(cridentials.email, cridentials.password)
});

// export const userLogout = createAsyncThunk("user/create", ({}) => {
//   return logout();
// })

export const userLogout = () => {
  return logout();
};
