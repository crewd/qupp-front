import { AnswerRegistration } from '../types/QnA';
import { instance } from './instance';

type User = {
  email: string;
  nickname?: string;
  password: string;
};

export const login = async (user: User) => {
  try {
    const data = await instance.post(`login`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (user: User) => {
  try {
    const data = await instance.post(`user`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const emailDuplicateCheck = async (email: string) => {
  try {
    const { data } = await instance.get(`user/duplicate/email?email=${email}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const nicknameDuplicateCheck = async (nickname: string) => {
  try {
    const { data } = await instance.get(
      `user/duplicate/nickname?nickname=${nickname}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionList = async () => {
  try {
    const { data } = await instance.get('questions');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionDetail = async (id: string) => {
  try {
    const { data } = await instance.get(`/question/${id}`);
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
    const { data } = await instance.post(`/question/${id}/answer`, answer);
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
  const { data }: { data: Image } = await instance.post(
    `/image?directory=${directory}`,
    image,
  );

  if (data.msg === '성공') {
    return data.obj.url;
  }

  return false;
};
