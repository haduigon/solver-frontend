export class Message {
  id: string = '';
  type: string = '';
  body: string = '';
  user: string = ''
  constructor(
    type = '',
    body = '',
    user = '',
    id = '',
  ) {
    this.type = type;
    this.body = body;
    this.user = user;
    this.id = id;
  }


 }