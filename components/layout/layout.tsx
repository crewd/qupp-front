import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <div className="max-w-[1280px] px-[20px] m-auto flex justify-between items-center h-[80px]">
          <Link href="/">
            <a>
              <h2 className="font-bold text-xxl">QUPP</h2>
            </a>
          </Link>
          <nav className="flex justify-between w-full">
            <div className="flex ml-[40px] font-bold">
              <Link href="/qna/list">
                <a className="lg:h-[40px] h-[30px] lg:leading-[40px] leading-[30px] hover:text-primary">
                  게시판
                </a>
              </Link>
              <Link href="/qna/write">
                <a className="ml-[40px] lg:h-[40px] h-[30px] lg:leading-[40px] leading-[30px] hover:text-primary">
                  글 작성하기
                </a>
              </Link>
            </div>
            <div className="font-bold">
              <button className="lg:w-[90px] w-[60px] lg:h-[40px] h-[30px] bg-primary text-white rounded-3xl">
                <Link href="/login">
                  <a className="block lg:h-[40px] h-[30px] lg:leading-[40px] leading-[30px]">
                    로그인
                  </a>
                </Link>
              </button>
              <button className="lg:w-[90px] w-[60px] lg:h-[40px] h-[30px] ml-[20px] rounded-3xl">
                <Link href="/signup">
                  <a className="block lg:h-[40px] h-[30px] lg:leading-[40px] leading-[30px]">
                    회원가입
                  </a>
                </Link>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="mt-[56px] px-[20px] pb-[40px] max-w-[1280px] m-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
