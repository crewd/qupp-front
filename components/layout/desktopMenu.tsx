import Link from 'next/link';

const DesktopNavMenu = () => {
  return (
    <nav className="justify-between hidden w-full lg:flex">
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
  );
};

export default DesktopNavMenu;
