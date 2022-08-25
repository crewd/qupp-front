type Question = {
  category: string;
  content: string;
  id: number;
  registerTime: string;
  subCategory: string;
  title: string;
  updateTime: string;
  urls: string[];
  user: {
    email: string;
    id: number;
    nickname: string;
  };
};

type Answer = {
  content: string;
  id: number;
  images: string[];
  registerTime: string;
  updateTime: string;
  user: {
    email: string;
    id: number;
    nickname: string;
  };
};

export type Questions = {
  msg: string;
  obj: Question[];
};

export type QuestionDetail = {
  msg: string;
  obj: {
    answers: Answer[];
    question: Question;
  };
};
