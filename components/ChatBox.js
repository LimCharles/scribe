const ChatBox = (props) => {
  const { className } = props;
  return (
    <div
      className={
        className
          ? className
          : "" +
            "h-full bg-slate-50 border-[1px] border-[#5B2A86] border-opacity-30 rounded-xl p-4"
      }
    >
      <p> HEY</p>
    </div>
  );
};

export default ChatBox;
