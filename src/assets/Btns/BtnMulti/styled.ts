import styled from "styled-components";

export const BtnMultistyled = styled.button`
background-color: ${props => props.theme.colors.secundary};
 color: ${props => props.theme.colors.background};
 
 font-size: 2rem;
 padding: 1rem;
 padding-left: 1.1rem;
 padding-right: 1.1rem;

 margin: auto;
 border-radius: 0.5rem;
 
 /* margin-right: 1rem; */



 &:hover{
    cursor: pointer;
 } 

`