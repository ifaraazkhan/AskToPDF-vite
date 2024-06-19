import { MessageCircle, PlusCircle } from "lucide-react";
import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";


const ChatSideBar = ({ chats, chatId }) => {
    
    return ( <>
     <div className="w-full h-screen overflow-scroll soff p-4 text-gray-200 bg-gray-900">
    <NavLink to="/app">
    <Button className="w-full border-dashed border-white border">
          <PlusCircle className="mr-2 w-4 h-4" />
          New Chat
        </Button>
    </NavLink>
    <div className="flex max-h-screen overflow-scroll pb-20 flex-col gap-2 mt-4">
   { console.log("chats-----",chats,chatId)}
    {chats && chats.length > 0 && (
  chats.map((chat) => (
    <NavLink key={chat.id} to={`/chat/${chat.id}`}>
      <div
        className={cn("rounded-lg p-3 text-slate-300 flex items-center", {
          "bg-blue-800 text-white": chat.id == chatId,
          "hover:text-white": chat.id != chatId,
        })}
      >
        <MessageCircle className="mr-2" />
        <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
          {chat.pdf_name} {/* Adjust property name to match your actual response */}
        </p>
      </div>
    </NavLink>
  ))
)}
    </div>

    <div className="absolute bottom-4 left-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 flex-wrap">
        <NavLink to="/app">Home</NavLink>
        </div>
    </div>
 

    </div>

    </> );
}

export default ChatSideBar;