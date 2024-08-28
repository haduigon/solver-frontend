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

export async function sendMessage(token: string, _question: string) {
  // const res = await client.post('/home', '', {
  //   headers: {
      
  //     "authorization": "bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0MjY5YTE3MzBlNTA3MTllNmIxNjA2ZTQyYzNhYjMyYjEyODA0NDkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi0IbQs9C-0YAg0KXQu9GO0L_RltC9IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0k5NUt3aGJrYlR5V0ctamNQdWhjcnhYeUFSYTBCQktETXN5dEx2aTNTZlFKU1A1aGRUPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2xvZ2luLXRlc3QtY2ZmNDUiLCJhdWQiOiJsb2dpbi10ZXN0LWNmZjQ1IiwiYXV0aF90aW1lIjoxNzIzNjM3NDg4LCJ1c2VyX2lkIjoiOGF5WFhLd3JMR1lOZjRITktjRG0ydlY5RFZKMyIsInN1YiI6IjhheVhYS3dyTEdZTmY0SE5LY0RtMnZWOURWSjMiLCJpYXQiOjE3MjM2Mzc0ODgsImV4cCI6MTcyMzY0MTA4OCwiZW1haWwiOiJoYWR1aWdvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMTM2MjExNzIyNTc2MzA1NTAzOCJdLCJlbWFpbCI6WyJoYWR1aWdvbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.iYJgNhj_cPmnfyc7WM5X1SRgPMerEeaxh9dEfEVpJ0v6IJ64pEjaizfW53THJ2Aoi3EJB_t6YtOflaEuGb8VRz_8zz_5016HurosZ0idIh_k-HaMMoDbhCC7uFLTPszccfoGMyoyyunaff3jVgc0vK83qqzdzJGd6clDmSPwucSbWjWH3k-cWCymY4YN7eJueO5eHSQdAdVeoeBU8gKDg8v7wEc__sKFvEoRQeNVO_B2t_kJ1xJyCXr7T63KdiehwMpP2g-FSCan3sNM_1St430YZcVFFGaYsurS_GsDWzVXcwX1_XccqmFpv-BNlNvxM_F9fGee-3rB-egB-sCeBg",
  //   },
  //   data: `m${question}`,
  // });
  // console.log(res.data, res,  'response.dataSEND MESSAGE utils');

  const res: any = await fetch('https://backend-frontend-solver.onrender.com/home', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": token,
      "type_authorization": "facebook"
      // "authorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0MjY5YTE3MzBlNTA3MTllNmIxNjA2ZTQyYzNhYjMyYjEyODA0NDkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi0IbQs9C-0YAg0KXQu9GO0L_RltC9IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0k5NUt3aGJrYlR5V0ctamNQdWhjcnhYeUFSYTBCQktETXN5dEx2aTNTZlFKU1A1aGRUPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2xvZ2luLXRlc3QtY2ZmNDUiLCJhdWQiOiJsb2dpbi10ZXN0LWNmZjQ1IiwiYXV0aF90aW1lIjoxNzIzNjM3NDg4LCJ1c2VyX2lkIjoiOGF5WFhLd3JMR1lOZjRITktjRG0ydlY5RFZKMyIsInN1YiI6IjhheVhYS3dyTEdZTmY0SE5LY0RtMnZWOURWSjMiLCJpYXQiOjE3MjM2Mzc0ODgsImV4cCI6MTcyMzY0MTA4OCwiZW1haWwiOiJoYWR1aWdvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMTM2MjExNzIyNTc2MzA1NTAzOCJdLCJlbWFpbCI6WyJoYWR1aWdvbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.iYJgNhj_cPmnfyc7WM5X1SRgPMerEeaxh9dEfEVpJ0v6IJ64pEjaizfW53THJ2Aoi3EJB_t6YtOflaEuGb8VRz_8zz_5016HurosZ0idIh_k-HaMMoDbhCC7uFLTPszccfoGMyoyyunaff3jVgc0vK83qqzdzJGd6clDmSPwucSbWjWH3k-cWCymY4YN7eJueO5eHSQdAdVeoeBU8gKDg8v7wEc__sKFvEoRQeNVO_B2t_kJ1xJyCXr7T63KdiehwMpP2g-FSCan3sNM_1St430YZcVFFGaYsurS_GsDWzVXcwX1_XccqmFpv-BNlNvxM_F9fGee-3rB-egB-sCeBg",
    },
    // body: JSON.stringify({ error: question })
  })


  
  const res2 = await res.json();
  console.log(res2, 'solver utils')

  return res2.solver;
}

export async function getAllHistoryData() {
  const token: any = getAuth().currentUser;
  const response = await client.get('/history', {
    headers: {
      "authorization": token.accessToken,
    }
  });

  
  // console.log(response.data, response,  'response.data utils', token);

  return response.data;
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

  console.log(mss, token.accessToken, 'mss!!!!!!!!!!!');
  
  const resp = await fetch('https://backend-frontend-solver.onrender.com/current_settings', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.accessToken,
      // "authorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0MjY5YTE3MzBlNTA3MTllNmIxNjA2ZTQyYzNhYjMyYjEyODA0NDkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi0IbQs9C-0YAg0KXQu9GO0L_RltC9IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0k5NUt3aGJrYlR5V0ctamNQdWhjcnhYeUFSYTBCQktETXN5dEx2aTNTZlFKU1A1aGRUPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2xvZ2luLXRlc3QtY2ZmNDUiLCJhdWQiOiJsb2dpbi10ZXN0LWNmZjQ1IiwiYXV0aF90aW1lIjoxNzIzNjM3NDg4LCJ1c2VyX2lkIjoiOGF5WFhLd3JMR1lOZjRITktjRG0ydlY5RFZKMyIsInN1YiI6IjhheVhYS3dyTEdZTmY0SE5LY0RtMnZWOURWSjMiLCJpYXQiOjE3MjM2Mzc0ODgsImV4cCI6MTcyMzY0MTA4OCwiZW1haWwiOiJoYWR1aWdvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMTM2MjExNzIyNTc2MzA1NTAzOCJdLCJlbWFpbCI6WyJoYWR1aWdvbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.iYJgNhj_cPmnfyc7WM5X1SRgPMerEeaxh9dEfEVpJ0v6IJ64pEjaizfW53THJ2Aoi3EJB_t6YtOflaEuGb8VRz_8zz_5016HurosZ0idIh_k-HaMMoDbhCC7uFLTPszccfoGMyoyyunaff3jVgc0vK83qqzdzJGd6clDmSPwucSbWjWH3k-cWCymY4YN7eJueO5eHSQdAdVeoeBU8gKDg8v7wEc__sKFvEoRQeNVO_B2t_kJ1xJyCXr7T63KdiehwMpP2g-FSCan3sNM_1St430YZcVFFGaYsurS_GsDWzVXcwX1_XccqmFpv-BNlNvxM_F9fGee-3rB-egB-sCeBg",
    },
  }).then(resp => resp.json()).then(res2 => console.log(res2, 'current settings request'))
  
  // const res = await resp.json();

  // console.log(res, 'res from fetch')

  // const response = await client.post('/current_settings', {
  //   headers: {
  //     // "Content-Type": "application/json",
  //     "authorization": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0MjY5YTE3MzBlNTA3MTllNmIxNjA2ZTQyYzNhYjMyYjEyODA0NDkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi0IbQs9C-0YAg0KXQu9GO0L_RltC9IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0k5NUt3aGJrYlR5V0ctamNQdWhjcnhYeUFSYTBCQktETXN5dEx2aTNTZlFKU1A1aGRUPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2xvZ2luLXRlc3QtY2ZmNDUiLCJhdWQiOiJsb2dpbi10ZXN0LWNmZjQ1IiwiYXV0aF90aW1lIjoxNzIzNjM3NDg4LCJ1c2VyX2lkIjoiOGF5WFhLd3JMR1lOZjRITktjRG0ydlY5RFZKMyIsInN1YiI6IjhheVhYS3dyTEdZTmY0SE5LY0RtMnZWOURWSjMiLCJpYXQiOjE3MjM2Mzc0ODgsImV4cCI6MTcyMzY0MTA4OCwiZW1haWwiOiJoYWR1aWdvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMTM2MjExNzIyNTc2MzA1NTAzOCJdLCJlbWFpbCI6WyJoYWR1aWdvbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.iYJgNhj_cPmnfyc7WM5X1SRgPMerEeaxh9dEfEVpJ0v6IJ64pEjaizfW53THJ2Aoi3EJB_t6YtOflaEuGb8VRz_8zz_5016HurosZ0idIh_k-HaMMoDbhCC7uFLTPszccfoGMyoyyunaff3jVgc0vK83qqzdzJGd6clDmSPwucSbWjWH3k-cWCymY4YN7eJueO5eHSQdAdVeoeBU8gKDg8v7wEc__sKFvEoRQeNVO_B2t_kJ1xJyCXr7T63KdiehwMpP2g-FSCan3sNM_1St430YZcVFFGaYsurS_GsDWzVXcwX1_XccqmFpv-BNlNvxM_F9fGee-3rB-egB-sCeBg",
  //   },
  //   // uid: "8ayXXKwrLGYNf4HNKcDm2vV9DVJ3",
  //   // os: "string",
  //   // language: "string",
  //   // project: "string",
  // }).then(res => console.log(res, 'res utils'));
  // console.log(response, response, 'response.data utils setSettings', token);
  // console.log(resp, 'resp in ut')

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