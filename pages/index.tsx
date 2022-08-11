import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
      <div className="h-[100vh] bg-gray-5 fixed w-full top-0 left-0 right-0 -z-10"></div>
      <div className="mt-[56px] w-[1100px] flex justify-between">
        <div className="mt-[95px] font-bold">
          <div className="mb-[50px]">
            <p className="text-md mb-[10px]">인문부터 예술까지 어느 분야든</p>
            <p className="text-max leading-[80px]">직접 해결하기 어려운</p>
            <p className="text-max leading-[80px]">대학교 공부는</p>
            <p className="text-max leading-[80px]">커프에서 물어보세요!</p>
          </div>
          <button className="rounded-3xl bg-primary w-[138px] h-[52px] text-white">
            바로 질문하기
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[100px]">
          <Link href="/">
            <a className="bg-white rounded-3xl p-[15px] w-[99px] h-[124px]">
              <p className="font-bold text-gray-3">
                내가 <br /> 등록한
                <br /> <span className="text-secondary-sBlue">질문</span>
              </p>
              <FontAwesomeIcon
                className="text-secondary-sBlue"
                icon={faArrowRight}
              />
            </a>
          </Link>
          <Link href="/">
            <a className="bg-white rounded-3xl p-[15px] w-[99px] h-[124px]">
              <p className="font-bold text-gray-3">
                내가 <br /> 등록한
                <br /> <span className="text-secondary-sBlue">답변</span>
              </p>
              <FontAwesomeIcon
                className="text-secondary-sBlue"
                icon={faArrowRight}
              />
            </a>
          </Link>
          <Link href="/">
            <a className="bg-white rounded-3xl p-[15px] w-[99px] h-[124px]">
              <p className="font-bold text-secondary-sBlue pt-[15px] leading-[20px]">
                즐겨찾기
                <br /> <span className="text-gray-3">목록</span>
              </p>
              <FontAwesomeIcon
                className="text-secondary-sBlue mt-[23px]"
                icon={faArrowRight}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
