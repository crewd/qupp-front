import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const QnA = () => {
  const router = useRouter();
  const { name } = router.query;

  const menuRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = menuRef.current;
    if (!element) {
      return;
    }
    if (element.innerHTML === name) {
      element.scrollIntoView();
    }
  }, [name]);

  return (
    <div className="max-w-[1280px] px-[20px] m-auto">
      <header className="border-b-[3px] border-primary pb-[15px]">
        <h2 className="lg:text-xxl text-xl leading-[42px] text-primary font-bold">
          카테고리
        </h2>
      </header>
      <nav className="flex justify-center w-full pt-[30px]">
        <ul className="flex sm:justify-between gap-[60px] w-[768px] overflow-x-auto scrollbar-hide lg:text-lg text-md flex-nowrap pb-[25px]">
          <li
            className={`
              flex-0-auto
              ${
                name === '인문'
                  ? 'text-primary border-b-[3px] border-primary'
                  : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
              }`}
          >
            <Link href="/qna/인문">
              <a ref={menuRef}>인문</a>
            </Link>
          </li>
          <li
            className={`
            flex-0-auto
            ${
              name === '사회'
                ? 'text-primary border-b-[3px] border-primary'
                : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
            }`}
          >
            <Link href="/qna/사회">
              <a ref={menuRef}>사회</a>
            </Link>
          </li>
          <li
            className={`
            flex-0-auto
            ${
              name === '상경'
                ? 'text-primary border-b-[3px] border-primary'
                : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
            }`}
          >
            <Link href="/qna/상경">
              <a ref={menuRef}>상경</a>
            </Link>
          </li>
          <li
            className={`
            flex-0-auto
            ${
              name === '자연과학'
                ? 'text-primary border-b-[3px] border-primary'
                : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
            }`}
          >
            <Link href="/qna/자연과학">
              <a ref={menuRef}>자연과학</a>
            </Link>
          </li>
          <li
            className={`
            flex-0-auto
            ${
              name === '공학'
                ? 'text-primary border-b-[3px] border-primary'
                : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
            }`}
          >
            <Link href="/qna/공학">
              <a ref={menuRef}>공학</a>
            </Link>
          </li>
          <li
            className={`
            flex-0-auto
            ${
              name === '예술'
                ? 'text-primary border-b-[3px] border-primary'
                : 'text-gray-3 hover:border-b-[3px] hover:border-primary hover:text-primary'
            }`}
          >
            <Link href="/qna/예술">
              <a ref={menuRef}>예술</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default QnA;
