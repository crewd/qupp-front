import { AnswerRegistration } from '../types/QnA';
import { instance } from './instance';

export const getQuestionList = async () => {
  const { data } = await instance.get('/questions');
  if (!data) {
    return false;
  }
  return data;
};

export const getQuestionDetail = async (id: string) => {
  const { data } = await instance.get(`/question/${id}`);

  if (!data) {
    return false;
  }

  return data;
};

export const answerRegistration = async (
  id: string,
  answer: AnswerRegistration,
) => {
  const { data } = await instance.post(`/question/${id}/answer`, answer);

  return data;
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
