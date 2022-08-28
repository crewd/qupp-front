import Head from 'next/head';
import Link from 'next/link';
import BgTitle from '../../components/common/bgTitle';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>로그인 | Qupp</title>
        <meta name="description" content="Qupp 로그인" />
      </Head>
      <BgTitle>로그인</BgTitle>
      <div className="sm:p-[60px] px-[20px] py-[60px] sm:bg-primary/10">
        <div className="sm:w-[400px] w-full sm:p-[30px] bg-white m-auto flex justify-center flex-col sm:border sm:shadow-xl sm:rounded-xl">
          <div className="w-full sm:h-[230px] h-[250px] flex flex-col gap-[20px] items-center">
            <div className="w-full">
              <p className="py-[10px]">이메일</p>
              <input
                className="outline-none border-b border-gray-5 w-full focus:border-primary py-[8px]"
                type="email"
                placeholder="이메일"
              />
            </div>
            <div className="w-full">
              <p className="py-[10px]">비밀번호</p>
              <input
                className="outline-none border-b border-gray-5 w-full focus:border-primary py-[8px]"
                type="password"
                placeholder="비밀번호"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] m-auto w-full mt-[20px]">
            <button className="w-full h-[40px] outline-none hover:font-bold text-white  bg-primary rounded-md hover:bg-secondary-sBlue hover:text-white">
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
