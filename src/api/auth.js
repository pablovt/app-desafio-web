import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/api/login_check`, {
    email,
    password,
  },
  {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};
