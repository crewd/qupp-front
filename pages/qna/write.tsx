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
      <BgTitle>질문 등록</BgTitle>
      <div className="py-[60px] bg-primary/10">
        <div className="md:border w-[1100px] m-auto md:shadow-xl md:rounded-3xl md:p-[20px] bg-white flex flex-col gap-[10px]">
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
                <ul className="absolute top-[100%] left-0 bg-white w-[130px] border border-primary border-t-0 rounded-b-lg shadow-lg z-20">
                  {category.map((data) => (
                    <li
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
          <div className="w-full h-[550px]">
            <WysiwygEditor cssStyle="h-[500px]" />
          </div>
          <div className="flex justify-end pt-[20px]">
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
