import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/user';

const DesktopNavMenu = () => {
  const [user, setUser] = useRecoilState(userState);

  const logOut = () => {
    localStorage.clear();
    setUser({
      token: '',
      email: '',
      nickName: '',
      isLoggedIn: false,
    });
  };

  return (
    <nav className="justify-end hidden w-full md:flex">
      <div className="flex font-bold">
        <div className="flex items-center pr-[50px]">
          <Link href="/">
            <a className="md:h-[40px] h-[30px] md:leading-[40px] leading-[30px] hover:text-primary">
              커프 소개
            </a>
          </Link>
          <p className="px-[30px] text-gray-5 select-none">|</p>
          <Link href="/qna/list">
            <a className="md:h-[40px] h-[30px] md:leading-[40px] leading-[30px] hover:text-primary">
              게시판
            </a>
          </Link>
          <p className="px-[30px] text-gray-5 select-none">|</p>
          <Link href="/qna/write">
            <a className="md:h-[40px] h-[30px] md:leading-[40px] leading-[30px] hover:text-primary">
              질문 작성하기
            </a>
          </Link>
        </div>
        <div>
          {user.isLoggedIn ? (
            <>
              <FontAwesomeIcon className="pr-[20px] text-lg" icon={faUser} />

              <button
                className="px-[15px] h-[40px] text-center bg-gray-1 rounded-full text-white ml-[20px]"
                onClick={logOut}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="px-[20px] py-[8px] leading-[40px] text-center bg-gray-1 rounded-full text-white">
                  로그인
                </a>
              </Link>
              <Link href="/signup">
                <a className="h-[40px] leading-[40px] ml-[20px]">회원가입</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavMenu;
