/* eslint-disable */
import axios from 'axios';

const apiUrl = 'https://backend-frontend-solver-2.onrender.com';
// const apiUrl = 'http://127.0.0.1:8000';
// const apiUrl = "https://ro.sms.destiny4you.com";


export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export async function sendMessage(token: string, question: string) {
  const response = await client.post('/home', {
    headers: {
      "authorization": token,
    },
    error: question,
  });

  return response.data.message;
  // return response.data.solver;
}