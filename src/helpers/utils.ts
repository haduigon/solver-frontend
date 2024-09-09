/* eslint-disable */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  getAuth,
} from 'firebase/auth';
import { useAppSelector } from '../app/hooks';

const apiUrl = 'https://backend-frontend-solver.onrender.com';

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export function useDetectNewDialog() {
  const app = useAppSelector(state => state);
  if (app.app.isNewDialog || app.app.history.length === 0) {
    return true;
  } else {
    return false;
  }
}

export async function sendMessage(token: string, question: string, isDialogNew: boolean = false) {

  // const isDialogNew = useDetectNewDialog();
  // console.log(isDialogNew, 'utils new dialog');
  const createNewDialog = isDialogNew ? 'm' : 'a';

  const res: any = await fetch('https://backend-frontend-solver.onrender.com/home', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": token,
    },
    body: JSON.stringify({ error: `${createNewDialog}${question}` })
  })
 
  const res2 = await res.json();

  return res2.solver;
}

export async function getAllHistoryData() {
  const token: any = getAuth().currentUser;
  const response = await client.get('/history/', {
    headers: {
      "authorization": token.accessToken,
    }
  })

  return response.data;
}

export async function setSettings() {

  const token: any = getAuth().currentUser;
  
  const resp = await fetch('https://backend-frontend-solver.onrender.com/current_settings', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.accessToken,
    },
    body: JSON.stringify({
      uid: token.uid,
      os: "string",
      language: "string",
      project: "string",
    })
  }).then(resp => resp.json()).then(res2 => console.log(res2, 'current settings request'))
  

  return resp;
}

export async function getDialog(id: string) {
  const token = getAuth().currentUser;

  const token2 = await token?.getIdToken()
  const response: any = await client.get(`/history/${id}`, {
    headers: {
      "authorization": token2,
    }
  });

  return response.data;
}

export function getId(email: string = '') {
  const hash = uuidv4();
  const time = new Date().getMilliseconds()

  const id = `${email} + ${hash} + ${time}`;
  return id.replaceAll(' ', '-');
}