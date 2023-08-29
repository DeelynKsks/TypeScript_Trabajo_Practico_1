// import React from 'react'

import { useState } from "react";
// import '../MyStyles.css'

function Calculadora() {

    const [num1, setNum1] = useState<number | ''>('');
    const [num2, setNum2] = useState<number | ''>('');
    const [operation, setOperation] = useState<string>('+');
    const [result, setResult] = useState<number | undefined>(undefined);

    const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum1(parseFloat(e.target.value));
    };
    
    const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum2(parseFloat(e.target.value));
    };
    

    const calculate = () => {
        if (num1 !== '' && num2 !== '') {
          const n1 = typeof num1 === 'number' ? num1 : parseFloat(num1);
          const n2 = typeof num2 === 'number' ? num2 : parseFloat(num2);
    
          if (!isNaN(n1) && !isNaN(n2)) {
            let calculatedResult: number | undefined;
    
            switch (operation) {
              case '+':
                calculatedResult = n1 + n2;
                break;
              case '-':
                calculatedResult = n1 - n2;
                break;
              case '*':
                calculatedResult = n1 * n2;
                break;
              case '/':
                calculatedResult = n1 / n2;
                break;
              default:
                calculatedResult = undefined;
            }
    
            setResult(calculatedResult);
          }
        }
      };

  return (
    <div className="divContainer textYellow">
      <h2>Calculadora de números</h2>
      <h4>Ingrese los valores a operar</h4>
      <input className="inputNumber" type="number" placeholder="Número 1" value={num1} onChange={handleNum1Change} />
      <br />
      <input className="inputNumber" type="number" placeholder="Número 2" value={num2} onChange={handleNum2Change} />
      <h5 className='textYellow'>Seleccione la operación</h5>
      <select className="selectCalculator textYellow" value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="+">Suma</option>
        <option value="-">Resta</option>
        <option value="*">Multiplicación</option>
        <option value="/">División</option>
      </select>
      <br />
      <button className="textYellow" onClick={calculate}>Calcular</button>
      <br />
      <div>Resultado: {result !== undefined ? result : 'N/A'}</div>
    </div>
  )
}

export default Calculadora