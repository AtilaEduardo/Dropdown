import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [open, abrir] = useState<boolean>(false);
  const botaoRef = useRef<HTMLDivElement>(null)
  const estado_botao = (state: boolean) => {
    abrir(!state);
  };
  const clicar_fora =(e:any)=>{
    if(open && !botaoRef.current?.contains(e.target as Node)){
      abrir(false)
      
    }
  }
  window.addEventListener("click",clicar_fora)
  
  console.log(open);

  return (
    <div className="App">
      <div className="botao" ref={botaoRef}>
        <button onClick={(e) => estado_botao(open)}>Selecione aluno</button>
        
        {open && (
          <ul>
            <li onClick={()=> console.log("Átila")}>Átila </li>
            <li onClick={()=> console.log("Leonardo")}>Leonardo</li>
            <li onClick={()=> console.log("Thais")}>Thais</li>
            <li onClick={()=> console.log("Viviane")}>Viviane</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;