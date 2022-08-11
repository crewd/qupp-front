import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1280px] m-auto">
      <header className="flex justify-between h-[80px] py-[20px] leading-[40px]">
        <h2 className="font-bold text-xxl">QUPP</h2>
        <nav>
          <button className="w-[90px] h-[40px] bg-primary text-white rounded-3xl">
            로그인
          </button>
          <button className="w-[90px] h-[40px] ml-[45px] rounded-3xl">
            회원가입
          </button>
        </nav>
      </header>
      <main className="my-[20px]">{children}</main>
    </div>
  );
};

export default Layout;
