import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

const ModalNavMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

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
        }  sm:w-[320px] w-[260px] h-screen p-[20px] z-50 duration-500`}
        ref={menuRef}
      >
        <FontAwesomeIcon
          className="pb-[10px]"
          icon={faX}
          size="lg"
          onClick={menuHandler}
        />
        <div className="py-[10px]">로그인</div>
        <div className="py-[10px]">회원가입</div>
      </nav>
    </div>
  );
};

export default ModalNavMenu;
