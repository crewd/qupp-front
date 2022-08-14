import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BgTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 w-full h-[400px] bg-gray-300 -z-10" />
      <div className="mt-[252px]">
        <div className="mb-[60px] bg-primary w-[277px] h-[70px] leading-[68px] flex items-center pr-[20px] justify-between rounded-tr-2xl">
          <Link href="/">
            <a className=" w-[80px] h-[70px]">
              <FontAwesomeIcon
                className="text-white pl-[30px]"
                icon={faHouse}
                size="lg"
              />
            </a>
          </Link>
          <h2 className="text-lg font-bold w-[calc(100%-80px)] select-none text-white border-l text-center border-white pl-[20px]">
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BgTitle;
