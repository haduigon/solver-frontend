/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type App = {
  showMenu: boolean,
  showLogout: boolean,
}

const initialApp: App = {
  showMenu: false,
  showLogout: false,
}

const appSlice = createSlice({
  name: "app",
  initialState: initialApp,
  reducers: {
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload;
    },
    setShowLogout: (state, action: PayloadAction<boolean>) => {
      state.showLogout = action.payload;
    }
  }
})

export default appSlice.reducer;
export const { setShowMenu } = appSlice.actions;
export const { setShowLogout } = appSlice.actions;