import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;
export const DEVICE_API = `${BASE_URL}/devices`;
export const TODO_API = `${BASE_URL}/todos`;
export const AUTH_API = `${BASE_URL}/auth`;

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      alert('Session expired or unauthorized. Please login again.');
      localStorage.removeItem('token');
      window.location.href = '/'; // Redirect to login
    }
    return Promise.reject(error);
  }
);



export default api;
