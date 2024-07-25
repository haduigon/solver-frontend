/* eslint-disable */
import axios from 'axios';

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
    error: question,
  });

  return response.data.solver;
}

export async function getAllHistoryData() {
  const response = await client.get('/history', {});

  return response.data;
}

  export function getId(email: string = '') {
      const time = new Date();

    const id = `${email} ${time.toDateString()} ${time.getHours()} ${time.getMinutes()} ${time.getSeconds()} ${time.getMilliseconds()}`;
    return id.replaceAll(' ', '-');
  }