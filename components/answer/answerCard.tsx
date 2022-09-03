type Answer = {
  content: string;
  writer: string;
  date: string;
};

const AnswerCard = () => {
  return (
    <div className="p-[20px] border rounded-xl shadow-xl bg-white">
      <h2 className="text-lg font-bold text-primary">답변</h2>
      <div className="py-[20px]">
        <p className="text-sm text-gray-5">2022/08/22</p>
        <p className="text-[14px]">글작성자</p>
      </div>
      <div>
        <p>잘 푸세요!</p>
      </div>
    </div>
  );
};

export default AnswerCard;
