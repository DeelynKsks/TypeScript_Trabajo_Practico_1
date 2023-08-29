// import React from 'react'

import { useState } from "react";

function ContadorPalabras() {

    const [sentence, setSentence] = useState<string>('');

    const countWords = (text: string) => {
        const words = text.trim().split(/\s+/);
        return text === '' ? 0 : words.length;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSentence(e.target.value);
  };

  return (
    <div className='divContainer textYellow'>
      <h2>Contador de palabras</h2>  
      <textarea className="inputNumber" placeholder="Ingresa una oración" value={sentence} onChange={handleInputChange}/>
      <p className="textYellow">Número de palabras: {countWords(sentence)}</p>
    </div>
  )
}

export default ContadorPalabras