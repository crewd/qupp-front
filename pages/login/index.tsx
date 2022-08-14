import Head from 'next/head';
import BgTitle from '../../components/common/bgTitle';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>로그인</title>
        <meta name="description" content="로그인" />
      </Head>
      <BgTitle>로그인</BgTitle>
      <div className="sm:w-[620px] w-full sm:px-[30px] sm:py-[40px] m-auto flex justify-center flex-col sm:border sm:shadow-xl sm:rounded-3xl">
        <div className="w-full flex flex-col gap-[20px] items-center">
          <div className="flex justify-between w-full text-gray-1">
            <p className="leading-[42px] font-bold">이메일</p>
            <input
              className="outline-none border w-[480px] border-primary rounded-md px-[10px] py-[8px]"
              type="email"
              placeholder="이메일"
            />
          </div>
          <div className="flex justify-between w-full text-gray-1">
            <p className="leading-[42px] font-bold">비밀번호</p>
            <input
              className="outline-none border w-[480px] border-primary rounded-md px-[10px] py-[8px]"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="mt-[30px] flex gap-[20px] m-auto w-[355px]">
            <button className="w-full h-[52px] outline-none font-bold text-white  bg-primary rounded-xl">
              로그인
            </button>
            <button className="w-full h-[52px] outline-none font-bold text-primary border border-primary bg-white rounded-xl">
              회원가입
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[10px] pt-[20px] text-gray-4">
        <p>아이디찾기</p>
        <p>|</p>
        <p>비밀번호 찾기</p>
      </div>
    </div>
  );
};

export default LoginPage;
