/* eslint-disable */
import { auth } from "../../firebase/firebase";
import { getId } from "../../helpers/utils";



export class Message {
  id: string;
  type: string;
  body: string | undefined;
  user: any;
  date: string;
  constructor(
    type: string,
    body: string | undefined,
    date: string,
  ) {
    this.type = type;
    this.body = body;
    this.date = date;
    this.user = auth.currentUser?.email;
    this.id = getId(this.user);    
  }
 }