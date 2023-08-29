// import React from 'react'
import { useState } from 'react';

function Contador() {

    const [start, setStart] = useState<number | ''>('');
    const [end, setEnd] = useState<number | ''>('');

    const [evenCount, setEvenCount] = useState<number>(0);
    const [oddCount, setOddCount] = useState<number>(0);
  
    const countNumbers = () => {
      if (start !== '' && end !== '') {
        const startNumber = typeof start === 'number' ? start : parseFloat(start);
        const endNumber = typeof end === 'number' ? end : parseFloat(end);
  
        if (!isNaN(startNumber) && !isNaN(endNumber) && startNumber <= endNumber) {
          let evens = 0;
          let odds = 0;
  
          for (let i = startNumber; i <= endNumber; i++) {
            if (i % 2 === 0) {
              evens++;
            } else {
              odds++;
            }
          }
  
          setEvenCount(evens);
          setOddCount(odds);
        }
      }
    };

  return (
    <div className='divContainer textYellow'>
      <h2>Contador de números pares e impares</h2>
      <h3>Ingrese el rango</h3>
      <input className='inputNumber' type="number" placeholder="Inicio" value={start} onChange={e => setStart(e.target.value !== '' ? parseFloat(e.target.value) : '')} />
      <br />
      <input className='inputNumber' type="number" placeholder="Fin" value={end} onChange={e => setEnd(e.target.value !== '' ? parseFloat(e.target.value) : '')} />
      <br />
      <button className='textYellow' onClick={countNumbers}>Contar</button>
      <br />
      <div className='textYellow'>Números pares: {evenCount}</div>
      <div className='textYellow'>Números impares: {oddCount}</div>
    </div>
  )
}

export default Contador