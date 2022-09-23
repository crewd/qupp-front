import axios from 'axios';
import { tokenStore } from '../util/token';

const baseURL =
  'http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080/';

const { getToken } = tokenStore;

export const instance = axios.create({
  baseURL: baseURL,
  headers: { Authorization: `Bearer ${getToken ? getToken.jwtToken : null}` },
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
});
