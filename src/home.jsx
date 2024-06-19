import { useState } from 'react'
import { Button } from './components/ui/button'

import { ModeToggle } from './components/mode-toggle'
import { DrawerDemo } from './components/demos/drawer'
import { ResizableDemo } from './components/demos/resizeable'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <ModeToggle/>
      <Button>Shadcn UI</Button>
      <ResizableDemo/>
      <DrawerDemo/>

    </>
  )
}

export default App
