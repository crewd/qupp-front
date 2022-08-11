import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1280px] m-auto">
      <header className="flex justify-between items-center h-[80px]">
        <h2 className="font-bold text-xxl">QUPP</h2>
        <nav>
          <button className="w-[90px] h-[40px] bg-primary text-white rounded-3xl">
            로그인
          </button>
          <Link href="/">
            <a className="w-[90px] h-[40px] ml-[50px] rounded-3xl">회원가입</a>
          </Link>
        </nav>
      </header>
      <main className="my-[20px]">{children}</main>
    </div>
  );
};

export default Layout;
