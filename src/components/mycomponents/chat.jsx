import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import ChatSideBar from "./chatSidebar"
import PDFViewer from "./pdfviewer";
import ChatComponent from "./chatbox";

function Chat() {
    const API_url = import.meta.env.VITE_API_URL;
    const { chatid } = useParams();
    const [chats, setChats] = useState([]);

    console.log("params -chatid ",chatid);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${API_url}/public/allchats/${chatid}`);
    
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
    
            const data = await response.json();
            console.log(data);
            setChats(data);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchData();
      }, []);

    return ( 
    
       <div className="flex h-screen overflow-scroll">
      <div className="flex w-full h-screen overflow-scroll">
        {/* chat sidebar */}
        <div className="flex-[1] max-w-xs">
            <ChatSideBar chats={chats.results} chatId={parseInt(chatid)}/>
         
        </div>
        {/* pdf viewer */}
        <div className="max-h-screen p-4 oveflow-scroll flex-[5]">
          {/* <PDFViewer pdf_url={currentChat?.pdfUrl || ""} /> */}
          {chats && chats.results && chats.results.length > 0 && (
    <PDFViewer key={chats.results[0].file_key} pdf_url={chats.results[0].file_key} />
)}
       
        </div>
        {/* chat component */}
        <div className="flex-[3] border-l-4 border-l-slate-200">
          {/* <ChatComponent chatId={parseInt(chatId)} /> */}
          {chats && chats.results && chats.results.length > 0 && (
          <ChatComponent key={chatid} chatId={chatid} file_key={chats.results[0].file_key} />
          )}
        </div>
      </div>
    </div>
    );
}

export default Chat;