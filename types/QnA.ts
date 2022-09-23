import { User, UserInfo } from './user';

type Question = {
  category: string;
  coment: Coment[];
  content: string;
  id: number;
  registerTime: string;
  subCategory: string;
  title: string;
  updateTime: string;
  urls: string[];
  user: UserInfo;
};

type Coment = {
  coment: string;
  id: number;
  registerTime: string;
  updateTime: string;
  user: UserInfo;
};

type Answer = {
  coments: Coment[];
  content: string;
  id: number;
  registerTime: string;
  updateTime: string;
  user: UserInfo;
};

export type AnswerRegistration = {
  author: string;
  content: string;
};

type Content = {
  answers: Answer[];
  question: Question;
};

export type Questions = {
  content: Content[];
};

export type QuestionDetail = {
  msg: string;
  obj: {
    answers: Answer[];
    question: Question;
  };
};
