import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import BgTitle from '../../../components/common/bgTitle';
import PostCard from '../../../components/post/postCard';

const QnA = () => {
  const router = useRouter();
  const { name } = router.query;

  const menuRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = menuRef.current;

    if (element && element.innerHTML === name) {
      element.scrollIntoView();
    }
  }, [name]);

  return (
    <div className="max-w-[1280px] m-auto">
      <BgTitle>게시판</BgTitle>
      <div className="mt-[60px]">
        <header className="border-b-[3px] border-primary pb-[15px]">
          <h2 className="lg:text-xxl text-xl leading-[42px] text-primary font-bold">
            카테고리
          </h2>
        </header>
        <nav className="w-full pt-[40px]">
          <ul className="flex justify-around m-auto text-lg font-bold">
            <li
              className={`${
                name === '인문'
                  ? 'text-primary border-b-[3px] border-primary'
                  : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
              }`}
            >
              <Link href="/qna/list/인문">
                <a ref={menuRef}>인문</a>
              </Link>
            </li>
            <li
              className={`${
                name === '사회'
                  ? 'text-primary border-b-[3px] border-primary'
                  : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
              }`}
            >
              <Link href="/qna/list/사회">
                <a ref={menuRef}>사회</a>
              </Link>
            </li>
            <li
              className={`${
                name === '상경'
                  ? 'text-primary border-b-[3px] border-primary'
                  : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
              }`}
            >
              <Link href="/qna/list/상경">
                <a ref={menuRef}>상경</a>
              </Link>
            </li>
            <li
              className={`${
                name === '자연과학'
                  ? 'text-primary border-b-[3px] border-primary'
                  : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
              }`}
            >
              <Link href="/qna/list/자연과학">
                <a ref={menuRef}>자연과학</a>
              </Link>
            </li>
            <li
              className={`${
                name === '공학'
                  ? 'text-primary border-b-[3px] border-primary'
                  : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
              }`}
            >
              <Link href="/qna/list/공학">
                <a ref={menuRef}>공학</a>
              </Link>
            </li>
            <li
              className={`${
                name === '예술'
                  ? 'text-primary border-b-[3px] border-primary'
                  : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
              }`}
            >
              <Link href="/qna/list/예술">
                <a ref={menuRef}>예술</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="py-[30px] flex justify-end">
          <div className="px-[10px] py-[10px] w-[333px] flex justify-between items-center border border-primary/30 outline-primary">
            <input
              className="outline-none placeholder:text-[#ccc] w-full mr-[10px] text-sm"
              type="text"
              placeholder="검색어를 입력해 주세요"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div>
          <div>
            <div className="grid w-full grid-cols-7 font-bold text-secondary-sBlue bg-primary/10 border-y border-secondary-sBlue">
              <p className="p-[20px] border-r border-secondary-sBlue text-center">
                계열
              </p>
              <p className="p-[20px] border-r col-span-4 border-secondary-sBlue text-center">
                제목
              </p>
              <p className="p-[20px] border-r border-secondary-sBlue text-center">
                작성자
              </p>
              <p className="p-[20px] border-r border-secondary-sBlue text-center">
                날짜
              </p>
            </div>
            <PostCard
              category="인문"
              title="이 문제는 어떻게 푸나요?"
              writer="작성자"
              date="2022/08/22"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
