import { UserButton,useAuth,useSignIn } from '@clerk/clerk-react';
import React,{useEffect, useState} from 'react';
import { Button } from '../ui/button';
import { LogIn } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import FileUploadUI from './uploadfile';



const HeroSection = () => {
    const [allchatsdata,setAllchatdata] = useState([]);
    const { getToken, isLoaded, isSignedIn } = useAuth();

    const API_url = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken();
                const response = await fetch(`${API_url}/auth/alluserchats`, {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                });
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                setAllchatdata(data.results);
              } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchData();
      }, []);

  return (
    <>
     
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              <h1 className="mr-3 text-5xl font-semibold">Ask question with any PDF</h1>
            </div>
            <p className="max-w-xl mt-1 text-lg text-slate-600 dark:text-white">
            Upload your PDFs here. Please note this is a free tool and all documents are public for signed-in users with no chat history.
          </p>
          <p><i className='text-wrap mx-auto text-sm  from-purple-500 via-pink-600 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent'>We will offer premium plans for private document storage in the future.</i></p>
          </div>
          <FileUploadUI/>
          <div className='w-full mt-4'>
          {
           <>
             {/* <FileUpload /> */}
           
            <div className='text-center'>
           
            </div>
            </>
          }
          <div>
            {(allchatsdata)?<>

                <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">S.No</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Date</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Filename</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center"></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
      {allchatsdata.map((item, index) => (
        <tr key={index}>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800 dark:text-gray-400">{index + 1}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{item.created_at}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium text-green-500">{item.pdf_name}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-lg text-center">
            
              <NavLink className='bg-green-600 hover:bg-green-700 text-white h-8 p-1.5 items-center rounded-[--btn-border-radius] text-sm' to={`/chat/${item.id}`} >Chat</NavLink></div>
          </td>
        </tr>
      ))}
    </tbody>
                    </table>
            
            </>:<></>}
         
          </div>
       
            
          </div>
        </div>
    </>
  );
};

export default HeroSection;
