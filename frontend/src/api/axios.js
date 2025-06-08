import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://request-tracker-yocu.onrender.com/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default instance;