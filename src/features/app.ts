/* eslint-disable */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "../types/types";
import { sendMessage } from "../helpers/utils";
// import { getId } from '../../src/helpers/utils'

type App = {
  showMenu: boolean,
  showLogout: boolean,
  response: string,
  dialog: Message[],
}

const initialApp: App = {
  showMenu: false,
  showLogout: false,
  response: '',
  dialog: [],
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
    },
    setResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.dialog.push(action.payload);
      // console.log(state, action, 'state and action');
      
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAnswer.fulfilled, (state, action) => {
      // const idR = getId();
      console.log(action, 'action app redux');
      
    const newR:Message = {
      id: 'fkvldfjvndijsnbijgnb',
      type: 'response',
      user: 'haduigon@gmail.com',
      body: action.payload as any,
    } ;
      state.dialog.push(newR)
    })
  }
})

export default appSlice.reducer;
export const { setShowMenu } = appSlice.actions;
export const { setShowLogout } = appSlice.actions;
export const { setResponse } = appSlice.actions;
export const { addMessage } = appSlice.actions;

export const getAnswer = createAsyncThunk("app/getResponse", (data: {
  token: string,
  question: string,
}) => {
  return sendMessage(data.token, data.question);
})

