/* eslint-disable */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  getAuth,
} from 'firebase/auth';
import picture from '../assets/img/backImg2.png';
// import { useAppSelector } from '../app/hooks';

const apiUrl = 'https://backend-frontend-solver.onrender.com';

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export const formattedDate = () => {
  const currentDate = new Date();

  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ` +
                      `${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}.` +
    `${String(currentDate.getMilliseconds()).padStart(3, '0')}000`;
  
  return formattedDate;
} 

export async function sendMessage(token: string, question: string, isDialogNew: string = 'm') {


  console.log(formattedDate());
  
  const res: any = await fetch('https://backend-frontend-solver.onrender.com/home', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": token,
    },
    body: JSON.stringify({
      error: `${isDialogNew}${question}`,
      datetime: formattedDate(),
    })
  })
 
  const res2 = await res.json();

  return res2.solver;
}

console.log(new Date().toDateString());


export async function getAllHistoryData() {
  const token: any = getAuth().currentUser;
  const response = await client.get('/history', {
    headers: {
      "authorization": token.accessToken,
    }
  })

  return response.data;
}

export async function setSettings() {
  const token: any = getAuth().currentUser;
  
  const test = await fetch(picture);
  
  const picture2 = await test.blob();

  const file = new FormData();
  file.append('uid', token.uid);
  file.append('os', 'MacOs');
  file.append('language', 'Javascript');
  file.append('project', 'reactjs');
  file.append('photo', picture2);


  const resp = await fetch('https://backend-frontend-solver.onrender.com/settings', {
    method: "POST",
    headers: {
      "authorization": token.accessToken,
    },
    body: file,
  });
  
  const res = await resp.json()

  return res;
}

export async function getDialog(id: string) {
  const token = getAuth().currentUser;

  const token2 = await token?.getIdToken()
  const response: any = await client.get(`/history/${id}`, {
    headers: {
      "authorization": token2,
    }
  });

  console.log(response.data, 'response data utils');
  
  return response.data;
}

export function getId(email: string = '') {
  const hash = uuidv4();
  const time = new Date().getMilliseconds()

  const id = `${email} + ${hash} + ${time}`;
  return id.replaceAll(' ', '-');
}