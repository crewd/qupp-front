import Head from 'next/head';
import BgTitle from '../../components/common/bgTitle';

const SignUpPage = () => {
  return (
    <div>
      <Head>
        <title>회원가입</title>
        <meta name="description" content="회원가입" />
      </Head>
      <BgTitle>회원가입</BgTitle>
      <div className="sm:w-[620px] w-full sm:px-[30px] sm:py-[40px] m-auto flex justify-center flex-col sm:border sm:shadow-xl sm:rounded-3xl">
        <div className="w-full flex flex-col gap-[20px]">
          <div className="flex justify-between w-full text-gray-1">
            <p className="leading-[42px] font-bold">이메일</p>
            <input
              className="outline-none border w-[440px] border-primary rounded-md px-[10px] py-[8px]"
              type="email"
              placeholder="이메일"
            />
          </div>
          <div className="flex justify-between w-full text-gray-1">
            <p className="font-bold laeding-[42px]">비밀번호</p>
            <input
              className="outline-none border w-[440px] border-primary rounded-md px-[10px] py-[8px]"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="flex justify-between w-full text-gray-1">
            <p className="leading-[42px] font-bold">비밀번호 확인</p>
            <input
              className="outline-none border w-[440px] border-primary rounded-md px-[10px] py-[8px]"
              type="password"
              placeholder="비밀번호 확인"
            />
          </div>
          <div className="flex justify-between w-full text-gray-1">
            <p className="font-bold laeding-[42px]">닉네임</p>
            <input
              className="outline-none border w-[440px] border-primary rounded-md px-[10px] py-[8px]"
              type="text"
              placeholder="닉네임"
            />
          </div>
          <div className="mt-[30px] flex justify-center">
            <button className="w-[165px] h-[52px] outline-none font-bold text-primary bg-white border border-primary rounded-md">
              가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
