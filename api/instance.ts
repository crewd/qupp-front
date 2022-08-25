import axios from 'axios';

const baseURL =
  'http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080/';

export const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
});
