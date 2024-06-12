import axios from 'axios';

const apiUrl = '';

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
})