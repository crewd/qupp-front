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
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[680px] border shadow-xl rounded-3xl p-[30px]">
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
          <div className="flex items-center pb-[10px] border-b border-gray-2">
            <p className="border border-primary w-[60px] h-[28px] text-center mr-[20px]">
              계열
            </p>
            <p>인문</p>
          </div>
          <div className="flex items-center pt-[10px] pb-[10px] border-b border-gray-2">
            <p className="border border-primary w-[60px] h-[28px] text-center mr-[20px]">
              제목
            </p>
            <p>{data.obj.title}</p>
          </div>
          <div className="flex justify-end pt-[10px] relative">
            <p className="border border-primary w-[60px] h-[28px] text-center absolute top-[10px] left-0">
              내용
            </p>
            <div className="p-[20px] border border-primary rounded-xl w-[calc(100%-80px)]">
              <div className="w-full bg-gray-5 h-[300px]" />
              <br />
              <p>이 문제는 어떻게 푸는 건가요?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[30px] mt-[30px] border-t border-gray-2">
        <p className="text-lg font-bold text-primary pb-[20px]">
          답변 작성하기
        </p>
        <div className="pb-[20px]">
          <WysiwygEditor cssStyle="w-full h-[252px]" />
        </div>
        <div className="flex justify-end pt-[40px]">
          <button className="bg-primary text-white font-bold rounded-full w-[106px] h-[56px]">
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
