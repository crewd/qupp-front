type Post = {
  answerCount: string;
  title: string;
  contents: string;
  writer: string;
  date: string;
};

const PostCard = ({ title, writer, date, contents, answerCount }: Post) => {
  return (
    <div className="w-full p-[12px] border border-primary rounded-xl bg-white hover:scale-105 ease-in-out cursor-pointer duration-300 shadow-md mb-[15px]">
      <div className="flex justify-between items-center relative before:absolute before:left-0 before:bottom-[-12px] before:w-full before:h-[1px] before:bg-gray-5">
        <p className="font-bold sm:text-md">{title}</p>
        <p className="min-w-[50px]">답변: {answerCount}</p>
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
