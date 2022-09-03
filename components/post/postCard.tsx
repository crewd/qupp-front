type Post = {
  category: string;
  title: string;
  contents: string;
  writer: string;
  date: string;
};

const PostCard = ({ category, title, writer, date, contents }: Post) => {
  return (
    <div className="w-full p-[20px] border border-primary rounded-xl bg-white hover:scale-105 ease-in-out cursor-pointer duration-300 shadow-md mb-[15px]">
      <div className="flex items-center relative before:absolute before:left-0 before:bottom-[-12px] before:w-full before:h-[1px] before:bg-gray-5">
        <p className="bg-primary p-[5px] text-white text-center w-[80px]">
          {category}
        </p>
        <p className="px-[10px] sm:text-md font-bold">{title}</p>
      </div>
      <div className="pt-[32px]">
        <p>{contents}</p>
        <div className="flex justify-end pt-[40px]">
          <p className="sm:px-[15px] px-[10px] relative before:absolute before:right-[-3px] before:bottom-0 before:w-[2px] before:h-full before:bg-gray-3">
            {writer}
          </p>
          <p className="sm:px-[15px] px-[10px] ml-[6px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
