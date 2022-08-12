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
          <nav>
            <button className="w-[90px] h-[40px] bg-primary text-white rounded-3xl">
              로그인
            </button>
            <Link href="/signup">
              <a className="w-[90px] h-[40px] ml-[50px] rounded-3xl text-gray-1">
                회원가입
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="mt-[56px] max-w-[1280px] px-[20px] m-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
