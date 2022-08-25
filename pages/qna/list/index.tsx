import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { getQuestionList } from '../../../api';
import BgTitle from '../../../components/common/bgTitle';
import PostCard from '../../../components/post/postCard';
import { Questions } from '../../../types/QnA';

const QnA = ({ questions }: { questions: Questions }) => {
  const router = useRouter();
  const category = router.query.category;

  const menuRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = menuRef.current;

    if (!category) {
      router.push('?category=인문');
    }

    if (element && element.innerHTML === category) {
      element.scrollIntoView();
    }
  }, [category]);

  return (
    <div className="max-w-[1280px] m-auto relative">
      <Head>
        <title>{category} 카테고리 | Qupp</title>
        <meta name="description" content={`Qupp ${category} 카테고리`} />
      </Head>
      <BgTitle>게시판</BgTitle>
      <div className="flex mt-[60px]">
        <nav className="w-[360px] lg:block hidden p-[20px] border shadow-lg rounded-xl">
          <h2 className="text-md font-bold text-primary pb-[10px] border-b-4 border-primary">
            카테고리
          </h2>
          <ul className="text-regular">
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=인문">
                <a
                  className={`w-full block ${
                    category === '인문' && 'text-primary font-bold'
                  }`}
                >
                  인문
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=사회">
                <a
                  className={`w-full block ${
                    category === '사회' && 'text-primary font-bold'
                  }`}
                >
                  사회
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=상경">
                <a
                  className={`w-full block ${
                    category === '상경' && 'text-primary font-bold'
                  }`}
                >
                  상경
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=자연과학">
                <a
                  className={`w-full block ${
                    category === '자연과학' && 'text-primary font-bold'
                  }`}
                >
                  자연과학
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=공학">
                <a
                  className={`w-full block ${
                    category === '공학' && 'text-primary font-bold'
                  }`}
                >
                  공학
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=예술">
                <a
                  className={`w-full block ${
                    category === '예술' && 'text-primary font-bold'
                  }`}
                >
                  예술
                </a>
              </Link>
            </li>
            <li className="py-[10px] hover:font-bold hover:text-primary cursor-pointer">
              <Link href="?category=없음">
                <a
                  className={`w-full block ${
                    category === '없음' && 'text-primary font-bold'
                  }`}
                >
                  게시글 없음
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-full lg:px-[60px] lg:mx-auto px-0 mx-auto">
          {category !== '없음' ? (
            <>
              <Link href="/qna/post/1">
                <a>
                  <PostCard
                    category={`${category ? category : '인문'}`}
                    title="이 문제는 어떻게 푸나요?"
                    writer="작성자"
                    date="2022/08/24"
                  />
                </a>
              </Link>
              <Link href="/qna/post/1">
                <a>
                  <PostCard
                    category={`${category ? category : '인문'}`}
                    title="이 문제는 어떻게 푸나요?"
                    writer="작성자"
                    date="2022/08/24"
                  />
                </a>
              </Link>
            </>
          ) : (
            <div className="">
              <p className="text-lg font-bold text-center">
                등록된 질문이 없습니다
              </p>
              <p className="mt-[20px] text-center text-gray-4">
                첫 번째로 질문을 등록해보세요!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const questions = await getQuestionList();
  return {
    props: {
      questions,
    },
  };
}

export default QnA;
