/* eslint-disable */
import { auth } from "../../firebase/firebase";
import { getId } from "../../helpers/utils";



export class Message {
  id: string;
  type: string;
  body: string | undefined;
  user: any;
  constructor(
    type: string,
    body: string | undefined,
  ) {
    this.type = type;
    this.body = body;
    this.user = auth.currentUser?.email;
    this.id = getId(this.user);
  }
 }