// import React from 'react'

import { useState } from "react";

function Tabla() {

    const [number, setNumber] = useState<number | ''>('');
    const [limit, setLimit] = useState<number | ''>('');

    const generateTable = () => {
        if (number !== '' && limit !== '') {
        const n = typeof number === 'number' ? number : parseFloat(number);
        const l = typeof limit === 'number' ? limit : parseFloat(limit);

        if (!isNaN(n) && !isNaN(l)) {
            const table = [];
            for (let i = 1; i <= l; i++) {
            table.push(<div className="textYellow" key={i}>{n} x {i} = {n * i}</div>);
            }
            return table;
        }
        }
        return null;
    };

  return (
    <div>
      <input className="inputNumber" type="text" placeholder="Número" value={number} onChange={e => setNumber(e.target.value !== '' ? parseFloat(e.target.value) : '')}/>
      <br />
      <input className="inputNumber" type="text" placeholder="Límite" value={limit} onChange={e => setLimit(e.target.value !== '' ? parseFloat(e.target.value) : '')}/>
      <br />
      <br />
      {generateTable()}
    </div>
  )
}

export default Tabla