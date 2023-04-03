import { Send } from "react-feather";
import { useState } from "react";
import Message from "#components/Message";

const ChatBox = (props) => {
  const { demo } = props;
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
        className={`${
          demo
            ? "bg-white rounded-xl border-[1px] border-page border-opacity-30 shadow-lg"
            : "border-t-page border-b-page border-[1px] border-r-0 border-l-0 border-opacity-30"
        } h-[88%] overflow-y-auto flex flex-col`}
      >
        <div
          id="chatbox"
          className="h-1 grow relative overflow-y-auto flex flex-col w-full"
          style={{
            justifyContent: messages.length == 0 ? "center" : "",
            alignItems: messages.length == 0 ? "center" : "",
          }}
        >
          {messages?.map((message, index) => {
            return <Message key={index} text={message.text} />;
          })}
          {messages.length == 0 ? (
            <p className="font-quicksand font-semibold text-3xl p-16 text-center">
              Try typing "Create an essay based on the readings about..."
            </p>
          ) : null}
        </div>
      </div>
      <div
        className={`relative self-center w-[50%] rounded-lg pl-3 py-3 bg-white border-[1px] border-page border-opacity-30 align-middle shadow-lg flex flex-row mt-5 max-h-24`}
      >
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
