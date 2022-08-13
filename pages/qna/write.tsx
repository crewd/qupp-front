import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

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
      <div className="mb-[20px]">
        <h2 className="text-xl font-bold text-primary">질문 등록하기</h2>
      </div>
      <div className="border-2 shadow-xl rounded-lg p-[10px]">
        <div className="flex text-center">
          <p className="text-white bg-primary w-[130px] rounded-tl-lg rounded-bl-lg p-[10px]">
            계열
          </p>
          <div className="relative">
            <div
              className={`p-[10px] w-[130px] border border-primary rounded-tr-lg ${
                !selectOpened && 'rounded-br-lg'
              }`}
            >
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setSelectOpened(!selectOpened)}
              >
                <span className="w-full">{selectTopic}</span>
                <FontAwesomeIcon className="" icon={faChevronDown} />
              </button>
            </div>
            {selectOpened && (
              <ul className="absolute top-[100%] bg-white w-[130px] border border-primary border-t-0 rounded-b-lg">
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
      </div>
    </div>
  );
};

export default AddPost;
