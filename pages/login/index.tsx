import Head from 'next/head';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>로그인</title>
        <meta name="description" content="로그인" />
      </Head>
      <div className="sm:w-[480px] w-full sm:px-[30px] sm:py-[40px] m-auto flex justify-center flex-col sm:border sm:shadow-xl sm:rounded-2xl">
        <p className="font-bold text-xl text-gray-1 mb-[30px] text-center">
          로그인
        </p>
        <div className="w-full flex flex-col gap-[20px]">
          <div className="w-full text-gray-1">
            <p className="mb-[15px]">이메일</p>
            <input
              className="outline-none border w-full border-primary rounded-md px-[10px] py-[8px]"
              type="email"
              placeholder="이메일"
            />
          </div>
          <div className="w-full text-gray-1">
            <p className="mb-[15px]">비밀번호</p>
            <input
              className="outline-none border w-full border-primary rounded-md px-[10px] py-[8px]"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="mt-[30px] flex flex-col gap-[20px]">
            <button className="w-full h-[40px] outline-none text-white  bg-primary rounded-md">
              로그인
            </button>
            <button className="w-full h-[40px] outline-none text-primary border border-primary bg-white rounded-md">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
