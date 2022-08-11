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
      <div>인덱스입니다</div>
    </div>
  );
};

export default Home;
