/* eslint-disable */

type Message = {
  type: string,
  body: string,
  user: string,
}

export class Dialog {
  // type = '';
  id = '';
  user = '';
  messages = [] as any;
  constructor(
    id: any,
    user: any,
  ) {
    this.id = id;
    this.user = user;
  }

  get() {
    return this;
  }

  addMessage (data: Message) {
    this.messages.push(data);
  }
} 
