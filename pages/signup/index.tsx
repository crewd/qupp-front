import Head from 'next/head';

const SignUpPage = () => {
  return (
    <div>
      <Head>
        <title>회원가입</title>
        <meta name="description" content="회원가입" />
      </Head>
      <div className="sm:w-[600px] w-full sm:px-[60px] sm:py-[40px] m-auto flex justify-center flex-col sm:border sm:shadow-xl sm:rounded-2xl">
        <p className="font-bold text-xl sm:text-left text-center text-gray-1 mb-[30px]">
          회원가입
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
          <div className="w-full text-gray-1">
            <p className="mb-[15px]">비밀번호 확인</p>
            <input
              className="outline-none border w-full border-primary rounded-md px-[10px] py-[8px]"
              type="password"
              placeholder="비밀번호 확인"
            />
          </div>
          <div className="w-full text-gray-1">
            <p className="mb-[15px]">닉네임</p>
            <input
              className="outline-none border w-full border-primary rounded-md px-[10px] py-[8px]"
              type="text"
              placeholder="닉네임"
            />
          </div>
          <div className="mt-[30px] flex flex-col gap-[20px]">
            <button className="w-full h-[40px] outline-none text-white  bg-primary rounded-md">
              가입하기
            </button>
            <button className="w-full h-[40px] outline-none text-primary border border-primary bg-white rounded-md">
              돌아가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
