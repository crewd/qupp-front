import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/user';
import { getToken, removeToken } from '../../util/token';
import DesktopNavMenu from './desktopMenu';
import ModalNavMenu from './modalMenu';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useRecoilState(userState);
  const token = getToken();

  const router = useRouter();

  const logOut = () => {
    removeToken();
    setUser({
      token: '',
      email: '',
      nickName: '',
      isLoggedIn: false,
    });
    router.replace('/login');
  };

  useEffect(() => {
    if (token) {
      setUser({
        token: token.jwtToken,
        email: token.email!,
        nickName: token.nickName,
        isLoggedIn: !!token,
      });
    }
  }, []);

  return (
    <div>
      <header>
        <div className="max-w-[1280px] px-[20px] m-auto flex justify-between items-center h-[80px]">
          <Link href="/">
            <a>
              <h2 className="font-bold text-xxl">QUPP</h2>
            </a>
          </Link>
          <DesktopNavMenu logOut={logOut} isLoggedIn={user.isLoggedIn} />
          <ModalNavMenu logOut={logOut} isLoggedIn={user.isLoggedIn} />
        </div>
      </header>
      <main className="mt-[56px] px-[10px] pb-[40px] max-w-[1280px] m-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
