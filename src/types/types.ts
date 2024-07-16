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