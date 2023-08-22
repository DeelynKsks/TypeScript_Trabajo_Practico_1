// import React from 'react'
import { useState } from 'react';

function Contador() {

    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(10);
    const [evenCount, setEvenCount] = useState<number>(0);
    const [oddCount, setOddCount] = useState<number>(0);
  
    const countNumbers = () => {
      let evens = 0;
      let odds = 0;
      for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
          evens++;
        } else {
          odds++;
        }
      }
      setEvenCount(evens);
      setOddCount(odds);
    };

  return (
    <div>
      <input type="number" placeholder="Inicio" value={start} onChange={e => setStart(Number(e.target.value))} />
      <input type="number" placeholder="Fin" value={end} onChange={e => setEnd(Number(e.target.value))} />
      <button onClick={countNumbers}>Contar</button>
      <div>Números pares: {evenCount}</div>
      <div>Números impares: {oddCount}</div>
    </div>
  )
}

export default Contador