import { useState } from 'react'
import { UserButton } from '@clerk/clerk-react'
import HeroSection from './components/mycomponents/herosection'
import AuthHeader from './components/mycomponents/authHeader'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div
      className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 dark:bg-gradient-to-r  dark:from-zinc-900 dark:to-zinc-700" 
      
    >
      <AuthHeader/>
     <HeroSection/>
      </div>
      

    </>
  )
}

export default App
