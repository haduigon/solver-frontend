export interface CustomError {
  errorName: "email" | "password",
}

export type Message = {
  id: string,
  type: string,
  body: string | undefined,
  user: string | undefined | null,
}

export type Dialog = {
  id: string,
  user: {},
  messages: Message[],
}

export type App = {
  showMenu: boolean,
  showLogout: boolean,
  response: string,
  dialog: Message[],
  messageIsTyping: boolean,
  history: any[],
  selectedHistory: [] | null,
  isNewDialog: boolean,
}

export type User = {
  isLoading: boolean,
  hasError: boolean,
}