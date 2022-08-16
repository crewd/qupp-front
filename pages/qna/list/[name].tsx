import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

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
      <header className="border-b-[3px] border-primary pb-[15px]">
        <h2 className="lg:text-xxl text-xl leading-[42px] text-primary font-bold">
          카테고리
        </h2>
      </header>
      <nav className="w-full pt-[40px]">
        <ul className="flex justify-between w-[820px] m-auto text-lg">
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
      <div className="py-[40px] w-[820px] m-auto flex justify-end">
        <div className="px-[10px] py-[10px] border border-primary/30 outline-primary">
          <input
            className="outline-none"
            type="text"
            placeholder="검색어를 입력해 주세요"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div>
        <div className="w-[820px] m-auto">
          <div className="flex justify-between w-full font-bold text-secondary-sBlue bg-primary/10 border-y border-secondary-sBlue">
            <p className="p-[20px] w-[90px] border-r border-secondary-sBlue text-center">
              계열
            </p>
            <p className="p-[20px] w-[456px] border-r border-secondary-sBlue text-center">
              제목
            </p>
            <p className="p-[20px] w-[90px] border-r border-secondary-sBlue text-center">
              작성자
            </p>
            <p className="p-[20px] w-[90px] border-r border-secondary-sBlue text-center">
              날짜
            </p>
            <p className="p-[20px] w-[90px] text-center">조회수</p>
          </div>
          <div className="flex justify-between w-full border-b border-primary">
            <p className="p-[20px] w-[90px] border-r border-primary text-center">
              인문
            </p>
            <p className="p-[20px] w-[456px] border-r border-primary">
              이 문제는 어떻게 푸나요?
            </p>
            <p className="p-[20px] w-[90px] border-r border-primary text-center">
              작성자
            </p>
            <p className="py-[20px] w-[90px] text-center border-r border-primary">
              2022/08/17
            </p>
            <p className="p-[20px] w-[90px] text-center">325</p>
          </div>
          <div className="flex justify-between w-full border-b border-primary">
            <p className="p-[20px] w-[90px] border-r border-primary text-center">
              인문
            </p>
            <p className="p-[20px] w-[456px] border-r border-primary">
              이 문제는 어떻게 푸나요?
            </p>
            <p className="p-[20px] w-[90px] border-r border-primary text-center">
              작성자
            </p>
            <p className="py-[20px] w-[90px] text-center border-r border-primary">
              2022/08/17
            </p>
            <p className="p-[20px] w-[90px] text-center">325</p>
          </div>
          <div className="flex justify-between w-full border-b border-primary">
            <p className="p-[20px] w-[90px] border-r border-primary text-center">
              인문
            </p>
            <p className="p-[20px] w-[456px] border-r border-primary">
              이 문제는 어떻게 푸나요?
            </p>
            <p className="p-[20px] w-[90px] border-r border-primary text-center">
              작성자
            </p>
            <p className="py-[20px] w-[90px] text-center border-r border-primary">
              2022/08/17
            </p>
            <p className="p-[20px] w-[90px] text-center">325</p>
          </div>
          <div className="flex justify-between w-full border-b border-primary">
            <p className="p-[20px] w-[90px] border-r border-primary text-center">
              인문
            </p>
            <p className="p-[20px] w-[456px] border-r border-primary">
              이 문제는 어떻게 푸나요?
            </p>
            <p className="p-[20px] w-[90px] border-r border-primary text-center">
              작성자
            </p>
            <p className="py-[20px] w-[90px] text-center border-r border-primary">
              2022/08/17
            </p>
            <p className="p-[20px] w-[90px] text-center">325</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
