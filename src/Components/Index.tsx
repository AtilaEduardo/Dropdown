import { useRef} from 'react';
import './Index.Down.css'

interface IDown {
    Estado: boolean;
    setOpen: (Estado: boolean) => void;
}

export function Down({ Estado, setOpen }: IDown) {
    const botaoRef = useRef<HTMLDivElement>(null);

    const clicar_fora = (e: any) => {
        if (Estado && botaoRef.current && !botaoRef.current.contains(e.target)) {
            setOpen(false);
        }
    }
        window.addEventListener("click", clicar_fora);
        return (
            <div className='botao' ref={botaoRef}>
            <button onClick={() => setOpen(!Estado)}>Selecione aluno</button>
            {Estado && (
                <ul>
                    <li onClick={() => console.log("Átila")}>Átila</li>
                    <li onClick={() => console.log("Leonardo")}>Leonardo</li>
                    <li onClick={() => console.log("Thais")}>Thais</li>
                    <li onClick={() => console.log("Viviane")}>Viviane</li>
                </ul>
            )}
        </div>
            
        );
}