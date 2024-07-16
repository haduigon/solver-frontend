/* eslint-disable */
import { auth } from "../../firebase/firebase";
import { getId } from "../../helpers/utils";

export class Message {
  id;
  type;
  body;
  user;
  constructor(
    type: string,
    body: string | undefined,
  ) {
    this.type = type;
    this.body = body;
    this.user = auth.currentUser?.email as any;
    this.id = getId(this.user);
  }
 }