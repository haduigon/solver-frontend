/* eslint-disable */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessage, getAllHistoryData, getDialog, setSettings } from "../helpers/utils";
import { Message } from "../app/classes/Message";

type App = {
  showMenu: boolean,
  showLogout: boolean,
  response: string,
  dialog: Message[],
  messageIsTyping: boolean,
  history: any[],
  selectedHistory: [] | null,
}
// const hstr = getAllHistoryData();
// console.log(hstr, 'str');

const initialApp: App = {
  showMenu: false,
  showLogout: false,
  response: '',
  dialog: [],
  messageIsTyping: false,
  history: [],
  selectedHistory: null,
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAnswer.fulfilled, (state, action) => {
      const newR = new Message('response', action.payload);
      console.log(action.payload, 'payload in redux')
      state.dialog.push(JSON.parse(JSON.stringify(newR)));
      state.messageIsTyping = false;
    }); 
    builder.addCase(getAnswer.pending, (state) => {
      state.messageIsTyping = true;
    });
    builder.addCase(getHistory.fulfilled, (state, action) => {
      state.history = action.payload;
    });
    builder.addCase(getDialogAsynk.fulfilled, (state, action) => {
      state.selectedHistory= action.payload;
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
});

export const setAppSettings = createAsyncThunk("app/setSettings", () => {
  console.log('setSettings');
  
  return setSettings();
});

export const getHistory = createAsyncThunk("app/getHistory", () => {
  // console.log('app thunk');
  
  return getAllHistoryData();
});

export const getDialogAsynk = createAsyncThunk("app/getDialog", (id: string) => {
  return getDialog(id);
});

