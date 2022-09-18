import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/user';
import { tokenStore } from '../../util/token';
import DesktopNavMenu from './desktopMenu';
import ModalNavMenu from './modalMenu';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const store = tokenStore;
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (store.isLoggedIn) {
      setUser({
        token: store.get('token')!,
        email: store.get('email')!,
        nickName: store.get('nickName')!,
        isLoggedIn: store.isLoggedIn,
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
          <DesktopNavMenu />
          <ModalNavMenu />
        </div>
      </header>
      <main className="mt-[56px] px-[10px] pb-[40px] max-w-[1280px] m-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
