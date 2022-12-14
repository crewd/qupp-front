import { faAngleDown, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getToken } from 'next-auth/jwt';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/user';
import { removeToken } from '../../util/token';

const ModalNavMenu = ({
  logOut,
  isLoggedIn,
}: {
  logOut: () => void;
  isLoggedIn: boolean;
}) => {
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
    <div className="block md:hidden">
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
        {isLoggedIn ? (
          <>
            <div className="px-[15px] py-[10px]" onClick={menuHandler}>
              <Link href="/">
                <a className="block">???????????????</a>
              </Link>
            </div>
            <div className="px-[15px] py-[10px]" onClick={menuHandler}>
              <button onClick={logOut}>
                <Link href="/login">
                  <a className="block">????????????</a>
                </Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="px-[15px] py-[10px]" onClick={menuHandler}>
              <Link href="/login">
                <a className="block">?????????</a>
              </Link>
            </div>
            <div className="px-[15px] py-[10px]" onClick={menuHandler}>
              <Link href="/signup">
                <a className="block">????????????</a>
              </Link>
            </div>
          </>
        )}

        <div className="px-[15px] py-[10px]">
          <div
            className="relative flex items-center"
            onClick={() => setCategoryOpened(!categoryOpened)}
          >
            <p className="pr-[10px]">????????????</p>
            <FontAwesomeIcon className="absolute right-0" icon={faAngleDown} />
          </div>
          {categoryOpened && (
            <ul className="duration-300 px-[10px]">
              <li
                className="py-[10px] mt-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=??????">
                  <a className="block">??????</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=??????">
                  <a className="block">??????</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=??????">
                  <a className="block">??????</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=????????????">
                  <a className="block">????????????</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=??????">
                  <a className="block">??????</a>
                </Link>
              </li>
              <li
                className="py-[10px] hover:text-primary"
                onClick={menuHandler}
              >
                <Link href="/qna/list?category=??????">
                  <a className="block">??????</a>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="px-[15px] py-[10px]" onClick={menuHandler}>
          <Link href="/qna/write">
            <a className="block">?????? ??????</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ModalNavMenu;
