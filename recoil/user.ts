import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    token: '',
    email: '',
    nickName: '',
    isLoggedIn: false,
  },
});
