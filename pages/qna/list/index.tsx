import {
  faMagnifyingGlass,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSideProps } from 'next';
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
      router.push('?category=전체');
    }

    if (element && element.innerHTML === category) {
      element.scrollIntoView();
    }
  }, [category]);

  return (
    <div className="max-w-[1280px] m-auto relative">
      <Head>
        <title>{`${category} 카테고리 | Qupp`}</title>
        <meta name="description" content={`Qupp ${category} 카테고리`} />
      </Head>
      <BgTitle>게시판</BgTitle>
      <div className="flex">
        <div className="w-[360px] md:block hidden">
          <nav className="py-[39px] px-[20px] border shadow-lg">
            <h2 className="text-md font-bold text-primary pb-[10px] border-b-4 border-primary">
              카테고리
            </h2>
            <ul className="text-regular">
              <li className="cursor-pointer hover:font-bold hover:text-primary">
                <Link href="?category=전체">
                  <a
                    className={`w-full block py-[10px] ${
                      category === '전체' && 'text-primary font-bold'
                    }`}
                  >
                    전체
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer hover:font-bold hover:text-primary">
                <Link href="?category=인문">
                  <a
                    className={`w-full block py-[10px] ${
                      category === '인문' && 'text-primary font-bold'
                    }`}
                  >
                    인문
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer hover:font-bold hover:text-primary">
                <Link href="?category=사회">
                  <a
                    className={`w-full block py-[10px] ${
                      category === '사회' && 'text-primary font-bold'
                    }`}
                  >
                    사회
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer hover:font-bold hover:text-primary">
                <Link href="?category=상경">
                  <a
                    className={`w-full block py-[10px] ${
                      category === '상경' && 'text-primary font-bold'
                    }`}
                  >
                    상경
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer hover:font-bold hover:text-primary">
                <Link href="?category=자연과학">
                  <a
                    className={`w-full block py-[10px] ${
                      category === '자연과학' && 'text-primary font-bold'
                    }`}
                  >
                    자연과학
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer hover:font-bold hover:text-primary">
                <Link href="?category=공학">
                  <a
                    className={`w-full block py-[10px] ${
                      category === '공학' && 'text-primary font-bold'
                    }`}
                  >
                    공학
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer hover:font-bold hover:text-primary">
                <Link href="?category=예술">
                  <a
                    className={`w-full block py-[10px] ${
                      category === '예술' && 'text-primary font-bold'
                    }`}
                  >
                    예술
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer hover:font-bold hover:text-primary">
                <Link href="?category=없음">
                  <a
                    className={`w-full block py-[10px] ${
                      category === '없음' && 'text-primary font-bold'
                    }`}
                  >
                    게시글 없음
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="pt-[10px] w-full">
            <Link href="/qna/write">
              <a className="text-white text-center block p-[8px] rounded-lg bg-primary hover:bg-primary/70">
                <FontAwesomeIcon className="pr-[10px]" icon={faPenToSquare} />
                질문 하기
              </a>
            </Link>
          </div>
        </div>
        <Link href="/qna/write">
          <a className="text-white text-center md:hidden flex items-center w-[60px] h-[60px] rounded-full bg-primary hover:bg-primary/70 fixed bottom-[10px] right-[10px]">
            <FontAwesomeIcon className="w-full text-xl" icon={faPenToSquare} />
          </a>
        </Link>
        <div className="w-full px-[24px] pb-[20px] md:mx-auto md:ml-[24px] mx-auto bg-primary/10">
          <div className="py-[20px] flex justify-end">
            <div className="px-[10px] bg-white flex items-center md:w-[50%] w-full h-[40px]">
              <input
                className="w-full outline-none"
                type="text"
                placeholder="검색어를 입력해 주세요"
              />
              <FontAwesomeIcon
                className="text-[#ccc] pl-[10px]"
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
          {category !== '없음' ? (
            <div>
              <Link href="/qna/post/1">
                <a>
                  <PostCard
                    answerCount="1"
                    title="이 문제는 어떻게 푸나요?"
                    contents="알려주세요"
                    writer="작성자"
                    date="2022/08/24"
                  />
                </a>
              </Link>
              <Link href="/qna/post/1">
                <a>
                  <PostCard
                    answerCount="1"
                    title="이 문제는 어떻게 푸나요?"
                    contents="알려주세요"
                    writer="작성자"
                    date="2022/08/24"
                  />
                </a>
              </Link>
            </div>
          ) : (
            <div className="bg-white p-[20px] h-[352px]">
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const questions = await getQuestionList();
  return {
    props: {
      questions,
    },
  };
};

export default QnA;
