import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { login } from '../../api';
import BgTitle from '../../components/common/bgTitle';
import useInput from '../../hook/useInput';
import { userState } from '../../recoil/user';
import { tokenStore } from '../../util/token';

const LoginPage = () => {
  const store = tokenStore;
  const router = useRouter();

  const setUser = useSetRecoilState(userState);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [loginError, setLoginError] = useState(false);

  const loginHandler = async () => {
    if (!email || !password) {
      return setLoginError(true);
    }
    const userData = await login({ email: email, password: password });
    await console.log(userData);
    if (userData) {
      store.set(userData);

      setUser({
        token: userData.jwtToken,
        email: userData.responseUser.email,
        nickName: userData.responseUser.nickname,
        isLoggedIn: true,
      });
      setLoginError(false);
      return router.replace('/');
    }
    return setLoginError(true);
  };

  return (
    <div>
      <Head>
        <title>로그인 | Qupp</title>
        <meta name="description" content="Qupp 로그인" />
      </Head>
      <BgTitle>로그인</BgTitle>
      <div className="md:p-[60px] px-[20px] py-[60px] md:bg-primary/10">
        <div className="md:w-[400px] w-full md:p-[30px] bg-white m-auto flex justify-center flex-col md:border md:shadow-xl md:rounded-xl">
          <div className="w-full md:h-[230px] h-[250px] flex flex-col gap-[20px] items-center">
            <div className="w-full">
              <p className="py-[10px]">이메일</p>
              <input
                className="outline-none border-b border-gray-5 w-full focus:border-primary py-[8px]"
                type="email"
                placeholder="이메일"
                onChange={onChangeEmail}
              />
            </div>
            <div className="w-full">
              <p className="py-[10px]">비밀번호</p>
              <input
                className="outline-none border-b border-gray-5 w-full focus:border-primary py-[8px]"
                type="password"
                placeholder="비밀번호"
                onChange={onChangePassword}
              />
            </div>
          </div>
          {loginError && (
            <p className="font-bold text-center text-red-500">
              로그인 정보를 확인해 주세요
            </p>
          )}
          <div className="flex flex-col gap-[15px] m-auto w-full mt-[20px]">
            <button
              className="w-full h-[40px] outline-none hover:font-bold text-white  bg-primary rounded-md hover:bg-secondary-sBlue hover:text-white"
              onClick={loginHandler}
            >
              로그인
            </button>
            <button className="w-full h-[40px] outline-none hover:font-bold text-primary border border-primary bg-white rounded-md hover:border-secondary-sBlue hover:text-secondary-sBlue">
              <Link href="/signup">
                <a className="block">회원가입</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full gap-[10px] pt-[20px] text-center text-gray-4">
          <p>아이디찾기</p>
          <p>|</p>
          <p>비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
