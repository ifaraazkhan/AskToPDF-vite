import { Inbox, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const FileUploadUI = () => {
    const API_url = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const [loading,setloading] = useState(false);
    const { getToken, isLoaded, isSignedIn } = useAuth();

    const { getRootProps, getInputProps } = useDropzone({
      accept: { 'application/pdf': ['.pdf'] },
      maxFiles: 1,
      onDrop: async (acceptedFiles) => {
        const pdfFile = acceptedFiles[0];
  
        const formData = new FormData();
        formData.append('pdfFile', pdfFile);
  
        try {
        setloading(true);
          const token = await getToken();
          const response = await fetch(`${API_url}/public/uploadpdf`, {
            method: 'POST', // <-- Moved method inside the object
            headers: {
              'Authorization': `Bearer ${token}`
            },
            body: formData, // Assuming formData is already defined
          });
  
          if (response.ok) {
            const result = await response.json();
            console.log("result",result);
            setloading(false);
            console.log('File uploaded successfully:', result);
            //redirect to new route /chat with chatid return from response
            let chatID =  result.chatID.results[0].id;
            navigate(`/chat/${chatID}`);
           
            // Handle the result (filename and key)
          } else {
            setloading(false);
            console.error('File upload failed:', response.statusText);
            // Handle the error
          }
        } catch (error) {
            setloading(false);
          console.error('Error during file upload:', error);
          // Handle the error
        }
      },
    });
    return ( 
        <>
        <div className="p-2 bg-white dark:bg-gray-700 rounded-xl mt-10">
            <div {...getRootProps({
                className:"border-dashed border-2 dark:border-slate-500  cursor-pointer bg-gray-50 dark:bg-gray-800 py-8 justify-center items-center flex-col"
            })}>
                <input {...getInputProps()}/>
                <>
                <center>
                    {(loading)?
                    <>
                      <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
                     <p className="mt-2 text-sm text-slate-400">Analysing Document</p>
                    </>
                   :
                   <>
                   <Inbox className="w-10 h-10 tex-bg-blue-500"/>
                   <p className="mt-2 text-sm text-slate-400">Drop your PDF file here</p>
                   </>
                    }
                
               
                </center>
                </>
            </div>
        </div>
        </>
     );
}

export default FileUploadUI;