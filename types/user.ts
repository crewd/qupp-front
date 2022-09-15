export type User = {
  msg: string;
  obj: {
    jwtToken: string;
    responseUser: {
      email: string;
      id: number;
      nickname: string;
    };
  };
};
