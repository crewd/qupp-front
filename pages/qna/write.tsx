import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import BgTitle from '../../components/common/bgTitle';

const WysiwygEditor = dynamic(() => import('../../components/editor'), {
  ssr: false,
});

const AddPost = () => {
  const category = ['인문', '사회', '상경', '자연과학', '공학', '예술'];

  const [selectTopic, setSelectTopic] = useState('계열');
  const [selectOpened, setSelectOpened] = useState(false);

  const selectCategory = (category: string) => {
    setSelectTopic(category);
  };

  useEffect(() => {
    setSelectOpened(false);
  }, [selectTopic]);

  return (
    <div>
      <Head>
        <title>질문 등록 | Qupp</title>
        <meta name="description" content="질문 등록" />
      </Head>
      <BgTitle>질문 등록</BgTitle>
      <div className="lg:py-[60px] py-[20px] lg:bg-primary/10">
        <div className="lg:border max-w-[1100px] m-auto lg:shadow-xl lg:rounded-3xl lg:p-[20px]  flex flex-col gap-[10px]">
          <div className="relative">
            <div className="px-[10px] py-[10px] w-[130px] h-[45px] border-b border-primary">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setSelectOpened(!selectOpened)}
              >
                <span
                  className={`w-full leading-[21px] text-left ${
                    selectTopic === '계열' ? 'text-gray-5 ' : 'text-gray-1'
                  }`}
                >
                  {selectTopic}
                </span>
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faChevronDown}
                />
              </button>
              {selectOpened && (
                <ul className="absolute top-[100%] left-0  w-[130px] border border-primary border-t-0 rounded-b-lg shadow-lg z-10">
                  {category.map((data) => (
                    <li
                      key={data}
                      className="px-[10px] py-[10px] hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectCategory(data)}
                    >
                      {data}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="pb-[20px]">
            <input
              className="w-full border-b outline-none border-primary px-[10px] py-[10px]"
              type="text"
              placeholder="제목"
            />
          </div>
          <div className="w-full h-[550px] mb-[40px]">
            <WysiwygEditor cssStyle="w-full h-[500px]" />
          </div>
          <div className="flex justify-end mb-[10px]">
            <button className="bg-primary text-white font-bold rounded-full w-[106px] h-[56px]">
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
