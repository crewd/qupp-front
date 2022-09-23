export type UserInfo = {
  email: string;
  id: number;
  nickname: string;
};

export type User = {
  jwtToken: string;
  responseUser: UserInfo;
};
