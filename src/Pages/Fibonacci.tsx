// import React from 'react'
import { useState } from 'react';

function Fibonacci() {

    const [count, setCount] = useState<number | ''>('');
    const [fibonacciSequence, setFibonacciSequence] = useState<number[]>([]);

    const generateFibonacciSequence = () => {
        if (typeof count === 'number') {
            const sequence: number[] = [];

            let num1 = 0;
            let num2 = 1;

            for (let i = 0; i < count; i++) {
                sequence.push(num1);
                const nextNum = num1 + num2;
                num1 = num2;
                num2 = nextNum;
            }

            setFibonacciSequence(sequence);
        }
    }

  return (
    <div>
        <input className='inputNumber' type="number" placeholder="Número de elementos" value={count} onChange={e => setCount(e.target.value !== '' ? parseInt(e.target.value) : '')} />
        <button onClick={generateFibonacciSequence}>Generar</button>
        {fibonacciSequence.length > 0 && (
            <div className='textYellow'>
                <p>Secuencia de Fibonacci:</p>
                <ul>
                    {fibonacciSequence.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Fibonacci