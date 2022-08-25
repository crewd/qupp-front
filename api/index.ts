import { instance } from './instance';

export const getQuestionList = async () => {
  const { data } = await instance.get('/questions');
  if (!data) {
    return false;
  }
  return data;
};
