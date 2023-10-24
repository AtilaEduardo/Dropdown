import { useState } from 'react'
import './App.css'
import { Down } from './Components/Index';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='App'>
      <Down Estado={open} setOpen={setOpen} />
    </div>
  )
}

export default App;
