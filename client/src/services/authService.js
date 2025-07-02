import api, { AUTH_API } from './api';

export const loginUser = async (email, password) => {
  try {
    const res = await api.post(`${AUTH_API}/login`, { email, password });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Login failed');
  }
};