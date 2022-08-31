import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import BgTitle from '../../components/common/bgTitle';

const WysiwygEditor = dynamic(() => import('../../components/editor'), {
  ssr: false,
});

const AddPost = () => {
  const category = ['인문', '사회', '상경', '자연과학', '공학', '예술'];

  // 카테고리, 제목, 내용
  const [selectTopic, setSelectTopic] = useState('계열');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState<string | null>('');

  // 카테고리, 제목, 내용 에러
  const [topicError, setTopicError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentsError, setContentsError] = useState(false);

  const categoryRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<ReactQuill>(null);

  // 카테고리 select
  const [selectOpened, setSelectOpened] = useState(false);

  const selectCategory = (category: string) => {
    setSelectTopic(category);
  };

  // 제목 onChange 핸들러
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // submit 핸들러
  const onSubmit = () => {
    if (selectTopic === '계열' && categoryRef.current) {
      categoryRef.current.focus();
      return setTopicError(true);
    }

    if (!title && titleRef.current) {
      titleRef.current.focus();
      return setTitleError(true);
    }

    if (!contents || contents === '<p><br></p>') {
      contentsRef.current!.focus();
      return setContentsError(true);
    }

    const post = {
      author: 'user',
      college: selectTopic,
      content: contents,
      dept: selectTopic,
      title: title,
    };

    console.log(post);
  };

  // 에러 핸들링
  useEffect(() => {
    setSelectOpened(false);
  }, [selectTopic]);

  useEffect(() => {
    if (selectTopic) {
      return setTopicError(false);
    }
  }, [selectTopic]);

  useEffect(() => {
    if (title) {
      return setTitleError(false);
    }
  }, [title]);

  useEffect(() => {
    if (contents && contents !== '<p><br></p>') {
      return setContentsError(false);
    }
  }, [contents]);

  return (
    <div>
      <Head>
        <title>질문 등록 | Qupp</title>
        <meta name="description" content="질문 등록" />
      </Head>
      <BgTitle>질문 등록</BgTitle>
      <div className="lg:py-[60px] py-[20px] lg:bg-primary/10">
        <div className="lg:border max-w-[1100px] m-auto lg:shadow-xl lg:rounded-3xl lg:p-[20px]  flex flex-col gap-[10px] bg-white">
          <div className="relative flex items-center">
            <div className="px-[10px] py-[10px] w-[130px] h-[45px] border-b border-primary">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setSelectOpened(!selectOpened)}
                ref={categoryRef}
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
                      className="px-[10px] py-[10px] hover:bg-gray-100 cursor-pointer bg-white"
                      onClick={() => selectCategory(data)}
                    >
                      {data}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {topicError && (
              <p className="ml-4 text-red-500">* 계열을 선택해 주세요!</p>
            )}
          </div>
          <div className="pb-[40px] relative">
            {titleError && (
              <p className="absolute top-[10px] left-[100px] text-red-500">
                * 제목을 입력해 주세요!
              </p>
            )}
            <input
              className="w-full border-b outline-none border-primary px-[10px] py-[10px]"
              type="text"
              placeholder="제목"
              onChange={(e) => titleHandler(e)}
              ref={titleRef}
            />
          </div>
          <div className="w-full h-[550px] mb-[40px] relative">
            {contentsError && (
              <p className="absolute text-red-500 top-[-30px]">
                * 내용을 입력해 주세요!
              </p>
            )}
            <WysiwygEditor
              cssStyle="w-full h-[500px]"
              getContents={setContents}
              refProp={contentsRef}
            />
          </div>
          <div className="flex justify-end mb-[10px]">
            <button
              className="bg-primary text-white font-bold rounded-full w-[106px] h-[56px]"
              onClick={onSubmit}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
