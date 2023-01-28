import React from "react";
import { Btnbox } from "../Btns/Btnbox";
import { BtnClearstyled } from "../Btns/BtnClear/styled";
import { BtnDividstyled } from "../Btns/BtnDivd/styled";
import { BtnMultistyled } from "../Btns/BtnMulti/styled";
import { BtnSomarstyled } from "../Btns/BtnSomar/styled";
import { BtnSubtrstyled } from "../Btns/BtnSubtr/styled";
import { Inputstyled } from "../Input/styled";
import { Pstyled } from "../Paragrafo/styled";
import { BoxStyled } from "./styled";

export const Box: React.FC = () => {
  const [numone, setNumone] = React.useState(0);
  const [numtwo, setNumtwo] = React.useState(0);
  const [result, setResult] = React.useState(0)

  function sum () {
    // const result = numone + numtwo
    setResult(numone + numtwo)
  }

  function subtrair () {
    setResult(numone - numtwo)
  }

  function multiplicar () {
    setResult(numone * numtwo)
  }

  function dividir () {
    setResult(numone / numtwo)
  }

  function clear () {
    setNumone(0)
    setNumtwo(0)
    setResult(0)
  }
 
  
  return (
    <>
      <BoxStyled>
        <Inputstyled
          value={numone}
          onChange={(e) => setNumone(+e.target.value )}
        />
        <Inputstyled
          value={numtwo}
          onChange={(e) => setNumtwo(+e.target.value)}
        />
        <Btnbox>
          <BtnSomarstyled onClick={sum}>+</BtnSomarstyled>
          <BtnSubtrstyled onClick={subtrair}>-</BtnSubtrstyled>
          <BtnMultistyled onClick={multiplicar}>x</BtnMultistyled>
          <BtnDividstyled onClick={dividir}>/</BtnDividstyled>
          <BtnClearstyled onClick={clear}>AC</BtnClearstyled>
          </Btnbox>
          <Pstyled>Resultado: {result}</Pstyled>

      </BoxStyled>
    </>
  );
};


