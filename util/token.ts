import { Cookies } from 'react-cookie';
import { User } from '../types/user';

// export const tokenStore = {
//   set: (token: User) => {
//     if (!token) {
//       return;
//     }
//     return localStorage.setItem('user', JSON.stringify(token));
//   },
//   get: () => localStorage.getItem('user'),
//   get isLoggedIn() {
//     return !!this.get();
//   },
//   get getToken() {
//     if (typeof window !== 'undefined') {
//       return JSON.parse(localStorage.getItem('user')!);
//     }
//   },
// };

const cookies = new Cookies();

export const setToken = (token: User) => {
  return cookies.set('user', token, { path: '/' });
};

export const getToken = () => {
  return cookies.get('user');
};

export const removeToken = () => {
  return cookies.remove('user');
};
