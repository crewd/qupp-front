import { faChevronDown, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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
      <div className="absolute top-0 left-0 right-0 w-full h-[400px] bg-gray-300 -z-10" />
      <div className="mt-[252px]">
        <div className="mb-[60px] bg-primary w-[277px] px-[30px] leading-[68px] flex items-center justify-between rounded-tr-2xl">
          <FontAwesomeIcon className="text-white" icon={faHouse} size="lg" />
          <h2 className="text-lg font-bold text-white border-l border-white pl-[30px]">
            질문 등록하기
          </h2>
        </div>
        <div className="border shadow-xl rounded-lg p-[20px] flex flex-col gap-[10px]">
          <div className="flex text-center">
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
              <WysiwygEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
