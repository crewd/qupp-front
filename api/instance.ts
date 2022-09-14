import axios from 'axios';

const baseURL = '/api/';

export const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
});
