/* eslint-disable */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  getAuth,
  // onAuthStateChanged
} from 'firebase/auth';
import {
  // useCallback,
  // useEffect
} from 'react';

const apiUrl = 'https://backend-frontend-solver.onrender.com';

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export async function sendMessage(token: string, question: string) {
  const response = await client.post('/home', {
    headers: {
      "authorization": token,
    },
    error: `m${question}`,
  });
  console.log(response.data, response,  'response.dataSEND MESSAGE utils', token);

  return response.data.solver;
}

export async function getAllHistoryData() {
  // const token: any = getAuth().currentUser;
  // const response = await client.get('/history', {
  //   headers: {
  //     "authorization": token.accessToken,
  //   }
  // });
  // console.log(response.data, response,  'response.data utils', token);

  // return response.data;
}

export async function setSettings() {

  //  const test = () => onAuthStateChanged(getAuth(), () => {
  //   const token: any = getAuth().currentUser;
  //   return token;
  //   // console.log('setSettings onauth', token);
  //  });

  // useCallback(() => {

  // }, [])

  // useEffect(() => {

  // }, [])
  // console.log(test, 'test');



  const token: any = getAuth().currentUser;
  console.log('setSettings', token);

  if (token) {
    console.log('kukukuk');

  }

  const mss = JSON.stringify({
    "uid": "string",
    "os": "string",
    "language": "string",
    "project": "string"
  })

  console.log(mss, token.accessToken,'mss');


  const response = await client.post('/settings', {
    headers: {
      // "Content-Type": "application/json",
      "authorization": token.accessToken,
    },
    uid: "8ayXXKwrLGYNf4HNKcDm2vV9DVJ3",
    os: "string",
    language: "string",
    project: "string",
  }).then(res => console.log(res, 'res utils'));
  console.log(response, response, 'response.data utils setSettings', token);

  // return response;
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