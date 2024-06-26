import React,{useState,useEffect} from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useChat } from "ai/react";
import MessageList from "./messageList";



const ChatComponent = ({ chatId,file_key }) => {
    const API_url = import.meta.env.VITE_API_URL;
    const { input, handleInputChange, handleSubmit,messages } = useChat({
        api:`${API_url}/public/ask-pdf`,
        body:{
            chatId:chatId,
            file_key:file_key,
        }
    }
    );
    const [isLoading, setIsLoading] = useState(false);
 
useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <div className="relative max-h-screen overflow-scroll" id="message-container" >
      {/* header */}
      <div className="sticky top-0 inset-x-0 p-2 bg-white dark:bg-gray-800 h-fit">
        <h3 className="text-xl font-bold">Chat</h3>
      </div>

     <MessageList messages={messages} isLoading={false}/>
      {/* <MessageList messages={messages} isLoading={isLoading} /> */}

      <form onSubmit={handleSubmit}
        className="sticky bottom-0 inset-x-0 px-2 py-4 bg-white dark:bg-gray-700 mt-1"
      >
        <div className="flex">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="w-full"
          />
          <Button className="bg-blue-600 ml-2">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;