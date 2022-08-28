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
