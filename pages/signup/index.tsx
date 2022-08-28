import Head from 'next/head';
import BgTitle from '../../components/common/bgTitle';

const SignUpPage = () => {
  return (
    <div>
      <Head>
        <title>회원가입 | Qupp</title>
        <meta name="description" content="Qupp 회원가입" />
      </Head>
      <BgTitle>회원가입</BgTitle>
      <div className="sm:p-[60px] px-[20px] py-[60px] sm:bg-primary/10">
        <div className="sm:w-[400px] w-full sm:px-[30px] sm:py-[40px] bg-white m-auto flex justify-center flex-col sm:border sm:shadow-xl sm:rounded-xl">
          <div className="w-full flex flex-col gap-[20px]">
            <div className="w-full">
              <p className="leading-[42px] w-[160px] pr-[10px]">이메일</p>
              <input
                className="outline-none border-b w-full border-gray-5 focus:border-primary py-[8px]"
                type="email"
                placeholder="이메일"
              />
            </div>
            <div className="w-full">
              <p className="w-[160px] pr-[10px] leading-[42px]">비밀번호</p>
              <input
                className="outline-none border-b w-full border-gray-5 focus:border-primary py-[8px]"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <div className="w-full">
              <p className="w-[160px] pr-[10px] leading-[42px]">
                비밀번호 확인
              </p>
              <input
                className="outline-none border-b w-full border-gray-5 focus:border-primary py-[8px]"
                type="password"
                placeholder="비밀번호 확인"
              />
            </div>
            <div className="w-full">
              <p className="w-[160px] pr-[10px] leading-[42px]">닉네임</p>
              <input
                className="outline-none border-b w-full border-gray-5 focus:border-primary py-[8px]"
                type="text"
                placeholder="닉네임"
              />
            </div>
            <div className="mt-[30px] flex justify-center">
              <button className="w-full h-[40px] outline-none text-primary bg-white border border-primary rounded-md hover:font-bold hover:border-secondary-sBlue hover:text-secondary-sBlue">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
