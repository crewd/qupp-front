type Post = {
  category: string;
  title: string;
  writer: string;
  date: string;
};

const PostCard = ({ category, title, writer, date }: Post) => {
  return (
    <div className="grid w-full grid-cols-7 border-b border-primary">
      <p className="p-[20px] border-r border-primary text-center">{category}</p>
      <p className="p-[20px] col-span-4 border-r border-primary">{title}</p>
      <p className="p-[20px] border-r border-primary text-center">{writer}</p>
      <p className="py-[20px] text-center border-r border-primary">{date}</p>
    </div>
  );
};

export default PostCard;
