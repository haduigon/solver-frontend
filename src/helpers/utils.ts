/* eslint-disable */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  getAuth,
} from 'firebase/auth';

const apiUrl = 'https://backend-frontend-solver.onrender.com';

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export async function sendMessage(token: string, question: string) {

  const res: any = await fetch('https://backend-frontend-solver.onrender.com/home', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": token,
    },
    body: JSON.stringify({ error: question })
  })
 
  const res2 = await res.json();

  return res2.solver;
}

export async function getAllHistoryData() {
  const token: any = getAuth().currentUser;
  const response = await client.get('/history/0', {
    headers: {
      "authorization": token.accessToken,
    }
  }).then(res => console.log(res, 'async utils get istory data'));

  return response;
}

export async function setSettings() {

  const token: any = getAuth().currentUser;
  
  const resp = await fetch('https://backend-frontend-solver.onrender.com/current_settings', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.accessToken,
    },
    // body: JSON.stringify({
    //   uid: token.uid,
    //   os: "string",
    //   language: "string",
    //   project: "string",
    // })
  }).then(resp => resp.json()).then(res2 => console.log(res2, 'current settings request'))

  return resp;
}

export async function getDialog(id: string) {
  const response = await client.get(`/history/${id}`, {});

  return response.data;
}

export function getId(email: string = '') {
  const hash = uuidv4();
  const time = new Date().getMilliseconds()

  const id = `${email} + ${hash} + ${time}`;
  return id.replaceAll(' ', '-');
}