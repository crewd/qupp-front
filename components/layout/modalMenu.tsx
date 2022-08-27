import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const ModalNavMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const menuHandler = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={menuHandler}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <div
        className={`fixed top-0 left-0 w-screen h-screen ${
          menuOpened && 'bg-gray-1/40'
        } duration-1000 z-30`}
        onClick={menuHandler}
      />
      <nav
        className={`fixed top-0 ${
          !menuOpened ? 'right-[-320px]' : 'right-0'
        } bg-white sm:w-[320px] w-[280px] h-screen p-[20px] z-40 duration-300`}
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
