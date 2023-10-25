import { useState } from 'react'
import {StyledApp}  from './App.styled'
import { Down } from './Components/Index';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledApp>
      <Down Estado={open} setOpen={setOpen} />
    </StyledApp>
  )
}

export default App;
