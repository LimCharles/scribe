import { Send } from "react-feather";
import { useState } from "react";
import Message from "#components/Message";

const ChatBox = (props) => {
  const [messages, setMessages] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (e.currentTarget.textContent != "") {
        setMessages([
          ...messages,
          {
            text: e.currentTarget.innerHTML,
          },
        ]);
        e.target.innerHTML = "";
      }
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div
        className={
          "h-[36rem] border-[1px] border-t-page border-b-page border-r-0 border-l-0 border-opacity-30"
        }
      >
        <div
          id="chatbox"
          className="relative overflow-y-auto flex flex-col h-full w-full"
        >
          {messages?.map((message, index) => {
            return <Message key={index} text={message.text} />;
          })}
        </div>
      </div>
      <div className="relative self-center w-[36rem] rounded-lg pl-3 py-3 bg-white border-[1px] border-page border-opacity-30 align-middle shadow-lg flex flex-row mt-5 max-h-24">
        <div
          id="chatprompt"
          contentEditable
          className="hover:outline-none active:outline-none focus:outline-none font-inter text-sm resize-none overflow-y-auto h-full w-full max-h-36"
          onClick={(event) => event.target.focus()}
          onKeyDown={handleKeyDown}
        />
        <Send
          className="absolute right-4 bottom-3 text-page opacity-90 cursor-pointer hover:text-secondary"
          size={20}
        />
      </div>
    </div>
  );
};

export default ChatBox;
