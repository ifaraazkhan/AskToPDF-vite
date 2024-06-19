import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './approuter.jsx';


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

console.log("PUBLISHABLE_KEY", PUBLISHABLE_KEY);
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
     {/* <Router><App /></Router> */}
     <AppRouter/>
    </ClerkProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
