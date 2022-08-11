import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Qupp</title>
        <meta
          name="description"
          content="직접 해결하기 어려운 대학교 공부는 커프에서 물어보세요!"
        />
      </Head>
      <div className="h-[808px] w-full min-w-[1320px] absolute top-0 left-0 right-0 bg-gray-5 -z-10" />
      <article className="mt-[56px] w-[1320px] px-[20px] h-[673px] flex justify-between mx-auto">
        <section className="mt-[95px] font-bold">
          <article className="mb-[50px]">
            <p className="text-md mb-[10px]">인문부터 예술까지 어느 분야든</p>
            <p className="text-max leading-[80px]">직접 해결하기 어려운</p>
            <p className="text-max leading-[80px]">대학교 공부는</p>
            <p className="text-max leading-[80px]">커프에서 물어보세요!</p>
          </article>
          <button className="rounded-3xl bg-primary w-[138px] h-[52px] text-white hover:bg-white hover:text-primary hover:border hover:border-primary">
            바로 질문하기
          </button>
        </section>
        <section className="grid grid-cols-3 gap-[100px] ml-[10px] mr-[130px]">
          <Link href="/">
            <a className="bg-white rounded-3xl p-[15px] w-[99px] h-[124px] shadow-xl">
              <article>
                <p className="font-bold text-gray-3">
                  내가 <br /> 등록한
                  <br /> <span className="text-secondary-sBlue">질문</span>
                </p>
                <FontAwesomeIcon
                  className="text-secondary-sBlue"
                  icon={faArrowRight}
                />
              </article>
            </a>
          </Link>
          <Link href="/">
            <a className="bg-white rounded-3xl p-[15px] w-[99px] h-[124px] shadow-xl">
              <article>
                <p className="font-bold text-gray-3">
                  내가 <br /> 등록한
                  <br /> <span className="text-secondary-sBlue">답변</span>
                </p>
                <FontAwesomeIcon
                  className="text-secondary-sBlue"
                  icon={faArrowRight}
                />
              </article>
            </a>
          </Link>
          <Link href="/">
            <a className="bg-white rounded-3xl p-[15px] w-[99px] h-[124px] shadow-xl">
              <article>
                <p className="font-bold text-secondary-sBlue pt-[15px] leading-[20px]">
                  즐겨찾기
                  <br /> <span className="text-gray-3">목록</span>
                </p>
                <FontAwesomeIcon
                  className="text-secondary-sBlue mt-[23px]"
                  icon={faArrowRight}
                />
              </article>
            </a>
          </Link>
        </section>
      </article>
      <article className="h-[808px] w-[1320px] px-[20px] m-auto bg-white flex flex-col justify-center items-center">
        <div className="flex text-secondary-sBlue">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <h1 className="text-max leading-[80px] font-bold px-[16px]">
            모르는 전공 문제를 물어볼 공간을 찾고 계신가요?
          </h1>
          <FontAwesomeIcon icon={faQuoteRight} size="2x" />
        </div>
        <h2 className="text-xl text-gray-3 leading-[40px]">
          QUPP에서 지금 바로 질문을 등록해 보세요!
        </h2>
        <section className="mt-[70px] grid grid-cols-2 gap-[70px]">
          <article className="w-[247px] h-[169px] border border-primary relative flex justify-center items-center">
            <div className="absolute w-full h-full border border-primary top-[5px] left-[5px] text-center">
              <h3 className="text-xl font-black text-secondary-sBlue leading-[80px]">
                질문하기
              </h3>
              <article className="text-sm text-gray-3 leading-[26px]">
                <p>QUPP는 어떤 문제든 괜찮아요.</p>
                <p>사진, 글로 질문을 등록할 수 있어요.</p>
              </article>
            </div>
          </article>
          <article className="w-[247px] h-[169px] border border-primary relative flex justify-center items-center">
            <div className="absolute w-full h-full border border-primary top-[5px] left-[5px] text-center">
              <h3 className="text-xl font-black text-secondary-sBlue leading-[80px]">
                댓글달기
              </h3>
              <article className="text-sm text-gray-3 leading-[26px]">
                <p>나의 생각을 사진, 글을 이용해</p>
                <p>댓글을 달 수 있어요.</p>
              </article>
            </div>
          </article>
          <article className="w-[247px] h-[169px] border border-primary relative flex justify-center items-center">
            <div className="absolute w-full h-full border border-primary top-[5px] left-[5px] text-center">
              <h3 className="text-xl font-black text-secondary-sBlue leading-[80px]">
                검색하기
              </h3>
              <article className="text-sm text-gray-3 leading-[26px]">
                <p>내가 궁금한 문제를 검색을 통해</p>
                <p>찾아 볼 수 있어요.</p>
              </article>
            </div>
          </article>
          <article className="w-[247px] h-[169px] border border-primary relative flex justify-center items-center">
            <div className="absolute w-full h-full border border-primary top-[5px] left-[5px] text-center">
              <h3 className="text-xl font-black text-secondary-sBlue leading-[80px]">
                모아보기
              </h3>
              <article className="text-sm text-gray-3 leading-[26px]">
                <p>마이페이지에서 내가 질문하고</p>
                <p>답변한 글을 확인 할 수 있어요.</p>
              </article>
            </div>
          </article>
        </section>
      </article>
    </div>
  );
};

export default Home;
