import styled from "styled-components";

export const Styledbotao = styled.button`
  &:hover {
    background-color: #00BFFF;
  }
`;

export const StyledLista = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  top: calc(57% + 5px);
  min-width: 30%;
  left: 15%;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 4px;
  box-shadow: 0 0 5px #862dd4;
  list-style: none;
`;

export const StyledItem = styled.li`
  background-color: #0875db;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color ease 0.2s;

  &:hover {
    background-color: #FF00FF;
  }
`;