import type { NextPage } from 'next';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Home: NextPage = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  const scrollHandler = (order: number) => {
    if (order === 1) {
      return section1Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (order === 2) {
      return section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (order === 3) {
      return section3Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (order === 4) {
      return section4Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    section5Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Head>
        <title>Qupp</title>
        <meta
          name="description"
          content="직접 해결하기 어려운 대학교 공부는 커프에서 물어보세요!"
        />
      </Head>
      <div className="flex flex-col justify-around items-center h-[calc(100vh-130px)]">
        <div className="sm:text-[50px] text-xxl sm:leading-[70px] font-bold text-center">
          <h1>전공 문제가</h1>
          <h1>막막할 때</h1>
          <h1>커프에서 물어보자!</h1>
        </div>
        <button
          className="flex flex-col items-center"
          onClick={() => scrollHandler(1)}
        >
          <p className="pb-[10px] text-lg">NEXT</p>
          <div className="relative flex flex-col items-center w-[50px]">
            <FontAwesomeIcon
              className="animate-bounce"
              icon={faArrowDownLong}
            />
            <div className="w-[24px] h-[24px] bg-primary rounded-full absolute -z-10 top-1" />
          </div>
        </button>
      </div>
      <div className="py-[10px]"></div>
      <div
        className="flex flex-col items-center justify-around h-screen py-[70px]"
        ref={section1Ref}
      >
        <div className="border border-gray-1 md:w-[900px] w-full relative py-[100px]">
          <div className="absolute w-full h-full border border-gray-1 sm:top-[10px] top-[5px] sm:left-[10px] left-[5px]"></div>
          <div className="lg:text-[28px] md:text-lg text-md leading-[36px] font-bold text-center flex items-center flex-col h-full p-[20px]">
            <h2>교수님과 친구들에게 물어보기 어려워서 난처한 적이 많았죠?</h2>
            <h2>커프에서 질문 글을 올리면</h2>
            <h2>과제를 해결하는 데 분명 도움을 받을 거예요.</h2>
          </div>
        </div>
        <button
          className="flex flex-col items-center"
          onClick={() => scrollHandler(2)}
        >
          <p className="pb-[10px] text-lg">NEXT</p>
          <div className="relative flex flex-col items-center w-[50px]">
            <FontAwesomeIcon
              className="animate-bounce"
              icon={faArrowDownLong}
            />
            <div className="w-[24px] h-[24px] bg-primary rounded-full absolute -z-10 top-1" />
          </div>
        </button>
      </div>
      <div
        className="w-screen py-[70px] ml-[calc(-50vw+50%)] bg-gray-200 mt-[70px] laeding-[30px] -z-20"
        ref={section2Ref}
      >
        <div className=" max-w-[1024px] p-[10px] mx-auto flex md:flex-row flex-col justify-between">
          <div className="text-lg font-bold">
            <h3 className="text-primary text-md pb-[30px]">질문하기</h3>
            <p>어떤 문제든 올릴 수 있어요!</p>
            <p>간단한 질문도 괜찮고,</p>
            <p>자세한 질문도 좋아요.</p>
            <p className="text-regular pt-[30px]">
              사진을 첨부해서 내 질문을 자세하게 설명해 보세요.
            </p>
          </div>
          <div className="md:w-[300px] w-full h-[400px] bg-[#d9d9d9] md:mt-0 mt-[70px]"></div>
        </div>
        <button
          className="flex flex-col items-center pt-[80px] m-auto"
          onClick={() => scrollHandler(3)}
        >
          <p className="pb-[10px] text-lg">NEXT</p>
          <div className="relative flex flex-col items-center w-[50px]">
            <FontAwesomeIcon
              className="z-10 animate-bounce"
              icon={faArrowDownLong}
            />
            <div className="w-[24px] h-[24px] bg-primary rounded-full absolute top-1" />
          </div>
        </button>
      </div>
      <div className="py-[70px]" ref={section3Ref}>
        <div className=" max-w-[1024px] p-[10px] mx-auto flex md:flex-row flex-col justify-between">
          <div className="text-lg font-bold">
            <h3 className="text-primary text-md pb-[30px]">검색하기</h3>
            <p>일단 게시판에서 검색해 보세요.</p>
            <p>고민하는 문제와 비슷한 질문을 찾을 수도 있어요!</p>
            <p className="text-regular pt-[30px]">
              게시판에서는 나와 관련된 계열의 질문들도 확인할 수 있어요.
            </p>
          </div>
          <div className="sm:w-[430px] w-full h-[400px] bg-[#d9d9d9] md:mt-0 mt-[70px]"></div>
        </div>
        <button
          className="flex flex-col items-center pt-[80px] m-auto"
          onClick={() => scrollHandler(4)}
        >
          <p className="pb-[10px] text-lg">NEXT</p>
          <div className="relative flex flex-col items-center w-[50px]">
            <FontAwesomeIcon
              className="z-10 animate-bounce"
              icon={faArrowDownLong}
            />
            <div className="w-[24px] h-[24px] bg-primary rounded-full absolute top-1" />
          </div>
        </button>
      </div>
      <div
        className="w-screen py-[70px] ml-[calc(-50vw+50%)] bg-gray-200 mt-[70px] laeding-[30px] -z-20"
        ref={section4Ref}
      >
        <div className=" max-w-[1024px] p-[10px] mx-auto flex flex-col-reverse md:flex-row justify-between">
          <div className="text-lg font-bold">
            <div className="sm:w-[430px] w-full h-[400px] bg-[#d9d9d9] md:mt-0 mt-[70px] mb-[30px]"></div>
            <p>답변이 이미 달린 질문 글이면,</p>
            <p>댓글로 다른 의견을 표현해도 좋아요.</p>
          </div>
          <div className="text-lg font-bold">
            <h3 className="text-primary text-md pb-[30px]">답변하기</h3>
            <p>질문 글에 달린 답변을 통해</p>
            <p>질문자와 답변자가</p>
            <p>1:1 소통을 할 수 있어요.</p>
          </div>
        </div>
        <button
          className="flex flex-col items-center pt-[80px] m-auto"
          onClick={() => scrollHandler(5)}
        >
          <p className="pb-[10px] text-lg">NEXT</p>
          <div className="relative flex flex-col items-center w-[50px]">
            <FontAwesomeIcon
              className="z-10 animate-bounce"
              icon={faArrowDownLong}
            />
            <div className="w-[24px] h-[24px] bg-primary rounded-full absolute top-1" />
          </div>
        </button>
      </div>
      <div className="py-[70px]" ref={section5Ref}>
        <div className=" max-w-[1024px] p-[10px] mx-auto flex md:flex-row flex-col justify-between">
          <div className="text-lg font-bold">
            <h3 className="text-primary text-md pb-[30px]">모아보기</h3>
            <p>일단 게시판에서 검색해 보세요.</p>
            <p>고민하는 문제와 비슷한 질문을 찾을 수도 있어요!</p>
            <p className="text-regular pt-[30px]">
              게시판에서는 나와 관련된 계열의 질문들도 확인할 수 있어요.
            </p>
          </div>
          <div className="sm:w-[430px] w-full h-[400px] bg-[#d9d9d9] md:mt-0 mt-[70px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
