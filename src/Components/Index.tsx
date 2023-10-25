import { useRef} from 'react';
import {Styledbotao, StyledItem, StyledLista} from './Index.Down.styled'

interface IDown {
    Estado: boolean;
    setOpen: (Estado: boolean) => void;
}

export function Down({ Estado, setOpen }: IDown) {
    const botaoRef = useRef<HTMLButtonElement>(null);

    const clicar_fora = (e: any) => {
        if (Estado && botaoRef.current && !botaoRef.current.contains(e.target)) {
            setOpen(false);
        }
    }
        window.addEventListener("click", clicar_fora);
        return (
           <Styledbotao ref={botaoRef}>
            <button onClick={() => setOpen(!Estado)}>Selecione aluno</button>
            {Estado && (
                <StyledLista>
                    <StyledItem onClick={() => console.log("Átila")}>Átila</StyledItem>
                    <StyledItem onClick={() => console.log("Leonardo")}>Leonardo</StyledItem>
                    <StyledItem onClick={() => console.log("Thais")}>Thais</StyledItem>
                    <StyledItem onClick={() => console.log("Viviane")}>Viviane</StyledItem>
                </StyledLista>
            )}            
            </Styledbotao>
        );
}