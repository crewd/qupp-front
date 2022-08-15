import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BgTitle from '../../components/common/bgTitle';

const WysiwygEditor = dynamic(() => import('../../components/editor'), {
  ssr: false,
});

const AddPost = () => {
  const category = ['인문', '사회', '상경', '자연과학', '공학', '예술'];

  const [selectTopic, setSelectTopic] = useState('인문');
  const [selectOpened, setSelectOpened] = useState(false);

  const selectCategory = (category: string) => {
    setSelectTopic(category);
  };

  useEffect(() => {
    setSelectOpened(false);
  }, [selectTopic]);

  return (
    <div>
      <BgTitle>질문 등록하기</BgTitle>
      <div className="border max-w-[680px] m-auto shadow-xl rounded-lg p-[20px] flex flex-col gap-[10px]">
        <div className="flex text-center ">
          <p className="text-white bg-primary h-[45px] w-[130px] leading-[25px] rounded-tl-lg rounded-bl-lg p-[10px]">
            계열
          </p>
          <div className="relative">
            <div
              className={`p-[10px] w-[130px] h-[45px] border border-primary rounded-tr-lg ${
                !selectOpened && 'rounded-br-lg'
              }`}
            >
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setSelectOpened(!selectOpened)}
              >
                <span className="w-full leading-[21px]">{selectTopic}</span>
                <FontAwesomeIcon className="" icon={faChevronDown} />
              </button>
            </div>
            {selectOpened && (
              <ul className="absolute top-[100%] bg-white w-[130px] border border-primary border-t-0 rounded-b-lg shadow-lg z-20">
                {category.map((data) => (
                  <li
                    className="py-[5px] hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectCategory(data)}
                  >
                    {data}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex text-center">
          <p className="text-white h-[45px] leading-[24px] bg-primary w-[130px] rounded-tl-lg rounded-bl-lg p-[10px]">
            제목
          </p>
          <input
            className="w-[calc(100%-130px)] border rounded-tr-lg rounded-br-lg outline-none border-primary px-[10px]"
            type="text"
          />
        </div>
        <div className="flex text-center">
          <p className="text-white bg-primary w-[130px] h-[45px]  leading-[24px] rounded-tl-lg rounded-bl-lg p-[10px]">
            내용
          </p>
          <div className="w-[calc(100%-130px)] h-[550px]">
            <WysiwygEditor cssStyle="h-[500px]" />
          </div>
        </div>
        <div className="flex justify-end pt-[20px]">
          <button className="bg-primary text-white font-bold rounded-full w-[106px] h-[56px]">
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
