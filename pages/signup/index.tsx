import Head from 'next/head';
import { useState, useEffect } from 'react';
import { emailDuplicateCheck } from '../../api';
import BgTitle from '../../components/common/bgTitle';
import useInput from '../../hook/useInput';

const SignUpPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickName, onChangeNickName] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value != password);
  };

  // useEffect(() => {
  //   if (!email) {
  //     return;
  //   }
  //   console.log(emailDuplicateCheck(email));
  // }, [email]);

  return (
    <div>
      <Head>
        <title>회원가입 | Qupp</title>
        <meta name="description" content="Qupp 회원가입" />
      </Head>
      <BgTitle>회원가입</BgTitle>
      <div className="md:p-[60px] px-[20px] py-[60px] md:bg-primary/10">
        <div className="md:w-[400px] w-full md:p-[30px] bg-white m-auto flex justify-center flex-col md:border md:shadow-xl md:rounded-xl">
          <form className="w-full flex flex-col gap-[20px]">
            <div className="w-full">
              <label
                className="leading-[42px] w-[160px] pr-[10px]"
                htmlFor="email"
              >
                이메일
              </label>
              <input
                className="outline-none border-b w-full border-gray-5 focus:border-primary py-[8px]"
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
                onChange={onChangeEmail}
              />
            </div>
            <div className="w-full">
              <label
                className="w-[160px] pr-[10px] leading-[42px]"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                className="outline-none border-b w-full border-gray-5 focus:border-primary py-[8px]"
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                onChange={onChangePassword}
              />
            </div>
            <div className="w-full">
              <label
                className="w-[160px] pr-[10px] leading-[42px]"
                htmlFor="passwordCheck"
              >
                비밀번호 확인
              </label>
              <input
                className="outline-none border-b w-full border-gray-5 focus:border-primary py-[8px]"
                type="password"
                id="passwordCheck"
                name="passwordCheck"
                placeholder="비밀번호 확인"
                onChange={onChangePasswordCheck}
              />
              {passwordError && (
                <p className="text-red-500 pt-[8px]">
                  비밀번호가 일치하지 않습니다!
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                className="w-[160px] pr-[10px] leading-[42px]"
                htmlFor="nickName"
              >
                닉네임
              </label>
              <input
                className="outline-none border-b w-full border-gray-5 focus:border-primary py-[8px]"
                type="text"
                id="nickName"
                name="nickName"
                placeholder="닉네임"
                onChange={onChangeNickName}
              />
            </div>
            <div className="mt-[30px] flex justify-center">
              <button className="w-full h-[40px] outline-none text-primary bg-white border border-primary rounded-md hover:font-bold hover:border-secondary-sBlue hover:text-secondary-sBlue">
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
