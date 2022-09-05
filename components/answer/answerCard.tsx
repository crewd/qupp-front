type Answer = {
  content: string;
  writer: string;
  date: string;
};

const AnswerCard = () => {
  return (
    <div className="p-[20px] border rounded-2xl shadow-xl bg-white">
      <div className="relative before:absolute before:w-full before:h-[1px] before:left-0 before:bottom-0 before:bg-gray-5 pb-[10px]">
        <p className="font-bold">작성자님의 답변</p>
        <p className="text-sm text-gray-5">2022/08/22</p>
      </div>
      <div className="py-[40px]">
        <p>잘 푸세요!</p>
      </div>
    </div>
  );
};

export default AnswerCard;
