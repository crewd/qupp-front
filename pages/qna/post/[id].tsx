import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { getQuestionDetail } from '../../../api';
import AnswerCard from '../../../components/answer/answerCard';
import BgTitle from '../../../components/common/bgTitle';

const data = {
  msg: 'string',
  obj: {
    content: 'string',
    id: 0,
    registerTime: '2022-08-15T17:57:10.286Z',
    title: '이 문제는 어떻게 푸나요?',
    updateTime: '2022-08-15T17:57:10.286Z',
  },
};

const WysiwygEditor = dynamic(() => import('../../../components/editor'), {
  ssr: false,
});

const Post = () => {
  const [contents, setContents] = useState('');
  const contentsRef = useRef<ReactQuill>(null);

  return (
    <div>
      <Head>
        <title>이 문제는 어떻게 푸나요? | Qupp</title>
        <meta name="description" content="게시글" />
      </Head>
      <BgTitle>질문</BgTitle>
      <div className="pt-[60px] md:bg-primary/10">
        <div className="flex justify-center w-full md:px-[20px]">
          <div className="md:w-[680px] w-full border shadow-xl rounded-3xl p-[30px] bg-white">
            <h2 className="w-full text-lg font-bold text-primary">질문</h2>
            <div className="py-[20px]">
              <p className="text-[14px] leading-[24px]">글작성자</p>
              <p className="text-sm text-gray-5">2022/08/22</p>
            </div>
            <div className="flex items-center pb-[10px] border-b border-primary">
              <p className="border border-primary w-[60px] text-center">계열</p>
              <p className="ml-[20px]">인문</p>
            </div>
            <div className="flex items-center pt-[20px] pb-[10px] border-b border-primary">
              <p>{data.obj.title}</p>
            </div>
            <div className="w-full mt-[20px]">
              <div className="w-full max-w-[500px] bg-gray-5 h-[300px]" />
              <br />
              <p>이 문제는 어떻게 푸는 건가요?</p>
            </div>
          </div>
        </div>

        <div className="mt-[50px] md:px-[20px] md:w-[680px] md: m-auto">
          <p className="text-md pb-[15px]">
            <span className="font-bold">1</span>개의 답변이 있습니다
          </p>
          <AnswerCard />
        </div>

        <div className="pt-[30px] mt-[50px] border-t-2 border-primary bg-white">
          <div className="md:w-[680px] md:px-[20px] m-auto">
            <p className="text-lg font-bold text-primary pb-[20px]">
              답변해 주세요!
            </p>
            <div className="pb-[20px] sm:h-[250px] h-[280px]">
              <WysiwygEditor
                cssStyle="w-full h-[180px]"
                getContents={setContents}
                refProp={contentsRef}
              />
            </div>
          </div>
          <div className="flex justify-end bg-white md:w-[680px] md:px-[20px] md:m-auto">
            <button className="bg-primary text-white font-bold rounded-xl w-full h-[48px]">
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const router = useRouter();
//   const id = router.query.id;

//   const questionDetail = await getQuestionDetail(id!.toString());
//   return {
//     props: {
//       questionDetail,
//     },
//   };
// };

export default Post;
