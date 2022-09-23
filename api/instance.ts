import axios from 'axios';
import { getToken } from '../util/token';

const baseURL =
  'http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080/';

const token = getToken();

export const instance = axios.create({
  baseURL: baseURL,
  headers: { Authorization: `Bearer ${token ? token.jwtToken : null}` },
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
});
