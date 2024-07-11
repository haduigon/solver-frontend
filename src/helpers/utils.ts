import axios from 'axios';

const apiUrl = 'https://backend-frontend-solver-2.onrender.com/docs#/default/root_home_post';
// const apiUrl = 'http://127.0.0.1:8000';

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
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