import styled from "styled-components";

export const Inputstyled = styled.input`
border: solid 0.10rem ${props => props.theme.colors.secundary};
background-color: ${props => props.theme.colors.primary};
color: ${props => props.theme.colors.secundary};

font-size: 1.25rem;
border-radius: 0.5rem;
padding: 0.75rem;
margin: auto;

`