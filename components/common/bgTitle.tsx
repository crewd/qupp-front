import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BgTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary w-[190px] h-[50px] leading-[68px] flex items-center pr-[20px] justify-between rounded-tr-2xl">
      <Link href="/">
        <a className=" w-[70px]">
          <FontAwesomeIcon
            className="text-white pl-[30px]"
            icon={faHouse}
            size="lg"
          />
        </a>
      </Link>
      <h2 className="text-regular font-bold w-[calc(100%-80px)] leading-[50px] select-none text-white border-l text-center border-white pl-[20px]">
        {children}
      </h2>
    </div>
  );
};

export default BgTitle;
