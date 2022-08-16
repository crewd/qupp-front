import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import BgTitle from '../../components/common/bgTitle';

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

const WysiwygEditor = dynamic(() => import('../../components/editor'), {
  ssr: false,
});

const Post = () => {
  const router = useRouter();
  return (
    <div>
      <BgTitle>질문</BgTitle>
      <div className="py-[60px]">
        <div className="flex justify-center w-full">
          <div className="w-full border shadow-xl rounded-3xl p-[30px] bg-white">
            <h2 className="w-full text-lg font-bold text-primary">질문</h2>
            <div className="py-[20px]">
              <p className="text-[14px] text-gray-1 leading-[24px]">글작성자</p>
              <p className="text-sm text-gray-5">
                {new Date(+new Date() + 3240 * 10000)
                  .toISOString()
                  .replace('T', ' ')
                  .replace(/\..*/, '')}
              </p>
            </div>
            <div className="flex items-center pb-[10px] border-b border-primary">
              <p className="border border-primary w-[60px] text-center">계열</p>
              <p className="ml-[20px]">인문</p>
            </div>
            <div className="flex items-center pt-[20px] pb-[10px] border-b border-primary">
              <p>{data.obj.title}</p>
            </div>
            <div className="w-full mt-[20px]">
              <div className="w-full bg-gray-5 h-[300px]" />
              <br />
              <p>이 문제는 어떻게 푸는 건가요?</p>
            </div>
          </div>
        </div>

        <div className="pt-[30px] mt-[50px] border-t-2 border-primary">
          <p className="text-lg font-bold text-primary pb-[20px]">
            답변 작성하기
          </p>
          <div className="pb-[20px]">
            <WysiwygEditor cssStyle="w-full h-[180px]" />
          </div>
          <div className="flex justify-end pt-[40px]">
            <button className="bg-primary text-white font-bold rounded-full w-[106px] h-[56px]">
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
