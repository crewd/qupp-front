import { faAngleDown, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const ModalNavMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [categoryOpened, setCategoryOpened] = useState(false);

  const menuHandler = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    if (menuOpened) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
    setCategoryOpened(false);
  }, [menuOpened]);

  return (
    <div className="block lg:hidden">
      <button onClick={menuHandler}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <div
        className={`fixed top-0 left-0 w-screen h-screen ${
          menuOpened ? 'bg-gray-1/40 z-40' : 'opacity-0 -z-20'
        } duration-1000`}
        onClick={menuHandler}
      />
      <nav
        className={`fixed top-0 bg-white ${
          !menuOpened ? 'right-[-320px] opacity-0' : 'right-0 bg-white'
        }  sm:w-[320px] w-[280px] h-screen p-[20px] z-50 duration-500 rounded-tl-xl rounded-bl-xl`}
      >
        <div className="font-bold p-10px mb-[20px] flex justify-center items-center">
          <h2 className="text-xl">Qupp</h2>
          <FontAwesomeIcon
            className="absolute left-[20px]"
            icon={faX}
            size="lg"
            onClick={menuHandler}
          />
        </div>
        <div className="px-[15px] py-[10px]" onClick={menuHandler}>
          <Link href="/login">
            <a className="block">로그인</a>
          </Link>
        </div>
        <div className="px-[15px] py-[10px]" onClick={menuHandler}>
          <Link href="/signup">
            <a className="block">회원가입</a>
          </Link>
        </div>
        <div className="px-[15px] py-[10px]">
          <div
            className="relative flex items-center"
            onClick={() => setCategoryOpened(!categoryOpened)}
          >
            <p className="pr-[10px]">카테고리</p>
            <FontAwesomeIcon className="absolute right-0" icon={faAngleDown} />
          </div>
          {categoryOpened && (
            <ul className="duration-300 px-[10px]">
              <li
                className="py-[10px] mt-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=인문">
                  <a className="block">인문</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=사회">
                  <a className="block">사회</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=상경">
                  <a className="block">상경</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=자연과학">
                  <a className="block">자연과학</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=공학">
                  <a className="block">공학</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=예술">
                  <a className="block">예술</a>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="px-[15px] py-[10px]" onClick={menuHandler}>
          <Link href="/qna/write">
            <a className="block">질문 하기</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ModalNavMenu;
