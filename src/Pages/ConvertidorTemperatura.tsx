// import React from 'react'

import { useState } from "react";

function ConvertidorTemperatura() {

    const [celsius, setCelsius] = useState<number | ''>('');
    const [fahrenheit, setFahrenheit] = useState<number | ''>('');

    const convertToCelsius = (fahrenheitValue: number) => {
        return (fahrenheitValue - 32) * (5 / 9);
    };

    const convertToFahrenheit = (celsiusValue: number) => {
        return (celsiusValue * 9) / 5 + 32;
    };

    const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value !== '' ? parseFloat(e.target.value) : '';
        setCelsius(value);
        setFahrenheit(value !== '' ? convertToFahrenheit(value) : '');
    };

    const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value !== '' ? parseFloat(e.target.value) : '';
        setFahrenheit(value);
        setCelsius(value !== '' ? convertToCelsius(value) : '');
    };

  return (
    <div className='divContainer textYellow'>
      <h2>Convertidor de temperatura</h2>
      <input className="inputNumber" type="number" placeholder="Celsius" value={celsius} onChange={handleCelsiusChange} />
      <br />
      <input className="inputNumber" type="number" placeholder="Fahrenheit" value={fahrenheit} onChange={handleFahrenheitChange} />
      <br />
    </div>
  )
}

export default ConvertidorTemperatura