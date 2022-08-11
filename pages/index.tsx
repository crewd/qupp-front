import type { NextPage } from 'next';
import Head from 'next/head';

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
      <div className="mt-[56px]">
        <div className="mt-[160px] font-bold">
          <p className="text-md">인문부터 예술까지 어느 분야든</p>
          <br />
          <p className="text-xxl">직접 해결하기 어려운</p>
          <p className="text-xxl">대학교 공부는</p>
          <p className="text-xxl">커프에서 물어보세요!</p>
        </div>
        <div>
          <div className="bg-white rounded-xl p-[15px] w-[99px] h-[124px]">
            <p className="font-bold text-gray-3">
              내가 <br /> 등록한
              <br /> <span className="text-secondary-sBlue">질문</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
