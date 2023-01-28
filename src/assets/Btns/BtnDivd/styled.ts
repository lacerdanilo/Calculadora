import styled from "styled-components";

export const BtnDividstyled = styled.button`
background-color: ${props => props.theme.colors.secundary};
 color: ${props => props.theme.colors.background};
 
 font-size: 2rem;
 padding: 1rem;
 padding-left: 1.25rem;
 padding-right: 1.25rem;

 margin: auto;
 border-radius: 0.5rem;
 
 /* margin-right: 1rem; */



 &:hover{
    cursor: pointer;
 } 

`