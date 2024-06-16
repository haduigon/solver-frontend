import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000';

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
})