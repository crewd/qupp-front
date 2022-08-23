type Post = {
  category: string;
  title: string;
  writer: string;
  date: string;
};

const PostCard = ({ category, title, writer, date }: Post) => {
  return (
    <div className="w-full p-[20px] border rounded-xl hover:scale-105 ease-in-out cursor-pointer duration-300 shadow-md mb-[15px]">
      <div className="flex justify-between">
        <p className="p-[5px] bg-primary text-white text-center w-[80px]">
          {category}
        </p>
        <p className="text-[14px] p-[5px]">{date}</p>
      </div>
      <p className="py-[10px] text-md">{title}</p>
      <p className="text-[14px]">{writer}</p>
    </div>
  );
};

export default PostCard;
