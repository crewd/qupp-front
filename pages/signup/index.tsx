import Head from 'next/head';
import { useState, useEffect } from 'react';
import { emailDuplicateCheck, nicknameDuplicateCheck, signUp } from '../../api';
import BgTitle from '../../components/common/bgTitle';
import useInput from '../../hook/useInput';

const SignUpPage = () => {
  const [email, onChangeEmail] = useInput('');

  const [password, onChangePassword] = useInput('');
  const [nickName, onChangeNickName] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [emailCheck, setEmailCheck] = useState<boolean | undefined>(true);
  const [nickNameCheck, setNickNameCheck] = useState<boolean | undefined>(true);
  const [userCheck, setUserCheck] = useState<boolean>();

  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value != password);
  };

  const signUpSubmit = async () => {
    if (!email || !emailCheck) {
      console.log('이메일');
      return setUserCheck(false);
    }

    if (!nickName || !nickNameCheck) {
      console.log('닉네임');
      return setUserCheck(false);
    }

    if (!password || passwordError) {
      console.log('비밀번호');
      return setUserCheck(false);
    }

    setUserCheck(true);
    signUp({
      email: email,
      nickname: nickName,
      password: password,
    });
  };

  useEffect(() => {
    const searchDebounce = setTimeout(async () => {
      if (!email) {
        return;
      }
      const emailDuplicate = await emailDuplicateCheck(email);
      setEmailCheck(emailDuplicate);
    }, 500);

    return () => {
      clearTimeout(searchDebounce);
    };
  }, [email]);

  useEffect(() => {
    const searchDebounce = setTimeout(async () => {
      if (!nickName) {
        return;
      }
      const nickNameDuplicate = await nicknameDuplicateCheck(nickName);
      setNickNameCheck(nickNameDuplicate);
    }, 500);

    return () => {
      clearTimeout(searchDebounce);
    };
  }, [nickName]);

  return (
    <div>
      <Head>
        <title>회원가입 | Qupp</title>
        <meta name="description" content="Qupp 회원가입" />
      </Head>
      <BgTitle>회원가입</BgTitle>
      <div className="md:p-[60px] px-[20px] py-[60px] md:bg-primary/10">
        <div className="md:w-[400px] w-full md:p-[30px] bg-white m-auto flex justify-center flex-col md:border md:shadow-xl md:rounded-xl">
          <div className="w-full flex flex-col gap-[20px]">
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
              {emailCheck === false && (
                <p className="text-red-500">중복된 이메일입니다</p>
              )}
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
              {nickNameCheck === false && (
                <p className="text-red-500">중복된 닉네임입니다</p>
              )}
            </div>
            <div className="mt-[30px] flex flex-col justify-center">
              <button
                className="w-full h-[40px] outline-none text-primary bg-white border border-primary rounded-md hover:font-bold hover:border-secondary-sBlue hover:text-secondary-sBlue"
                onClick={signUpSubmit}
              >
                회원가입
              </button>
              {userCheck === false && (
                <p className="w-full text-center text-red-500 pt-[15px]">
                  입력된 정보를 확인 해 주세요
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
