import { AnswerRegistration } from '../types/QnA';
import { User } from '../types/user';
import { instance } from './instance';

type UserData = {
  email: string;
  nickname?: string;
  password: string;
};

type LoginUser = {
  email: string;
  nickname?: string;
  password: string;
};

export const login = async (user: LoginUser) => {
  try {
    const data: User = await instance.post(`login`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (user: UserData) => {
  try {
    const data = await instance.post(`user`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

type Check = {
  msg: string;
  obj: null;
};

export const emailDuplicateCheck = async (email: string) => {
  try {
    const data: Check = await instance.get(
      `user/duplicate/email?email=${email}`,
    );
    if (data.msg === '사용가능한 아이디입니다.') {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const nicknameDuplicateCheck = async (nickname: string) => {
  try {
    const data: Check = await instance.get(
      `user/duplicate/nickname?nickname=${nickname}`,
    );
    if (data.msg === '사용가능한 닉네임입니다.') {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionList = async (page: number, category: string) => {
  try {
    const data = await instance.get(
      `questions?page=${page}&category=${category}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionDetail = async (id: string) => {
  try {
    const data = await instance.get(`question/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const answerRegistration = async (
  id: string,
  answer: AnswerRegistration,
) => {
  try {
    const data = await instance.post(`question/${id}/answer`, answer);
    return data;
  } catch (error) {
    console.log(error);
  }
};

type Image = {
  msg: string;
  obj: {
    url: string;
  };
};

export const imageUpload = async (directory: string, image: FileList) => {
  const data: { data: Image } = await instance.post(
    `/image?directory=${directory}`,
    image,
  );
  return data;
};
