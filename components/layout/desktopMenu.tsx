import Link from 'next/link';

const DesktopNavMenu = () => {
  return (
    <nav className="justify-end hidden w-full md:flex">
      <div className="flex font-bold">
        <div className="flex items-center pr-[50px]">
          <Link href="/">
            <a className="lg:h-[40px] h-[30px] lg:leading-[40px] leading-[30px] hover:text-primary">
              커프 소개
            </a>
          </Link>
          <p className="px-[30px] text-gray-5 select-none">|</p>
          <Link href="/qna/list">
            <a className="lg:h-[40px] h-[30px] lg:leading-[40px] leading-[30px] hover:text-primary">
              게시판
            </a>
          </Link>
          <p className="px-[30px] text-gray-5 select-none">|</p>
          <Link href="/qna/write">
            <a className="lg:h-[40px] h-[30px] lg:leading-[40px] leading-[30px] hover:text-primary">
              질문 작성하기
            </a>
          </Link>
        </div>
        <Link href="/login">
          <a className="w-[80px] h-[40px] leading-[40px] text-center bg-gray-1 rounded-full text-white">
            로그인
          </a>
        </Link>
        <Link href="/signup">
          <a className="h-[40px] leading-[40px] ml-[20px]">회원가입</a>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavMenu;
