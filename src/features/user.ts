/* eslint-disable */
import {
  createAsyncThunk, createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction
} from "@reduxjs/toolkit";
import { logInWithEmailAndPassword, createUserEmailPassword, logout, loginWithGoogle } from '../firebase/firebase';

type User = {
  isLoading: boolean,
  hasError: boolean,
  fbAuthToken: string,
}

const initialUser: User = {
  isLoading: false,
  hasError: false,
  fbAuthToken: '',
}

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setFbAuthToken: (state, action: PayloadAction<string>) => {
      state.fbAuthToken = action.payload;
    }
  },
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
export const { setFbAuthToken } = userSlice.actions;
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

export const userGoogleLogin = createAsyncThunk("user/authWithGoogle", () => {
  return loginWithGoogle();
})

export const userLogout = () => {
  return logout();
};
