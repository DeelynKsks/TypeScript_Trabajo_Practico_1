// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './MyStyles.css'
import Calculadora from './Pages/Calculadora';
import Contador from './Pages/Contador'
import Tabla from './Pages/Tabla'
import Fibonacci from './Pages/Fibonacci'
import ConvertidorTemperatura from './Pages/ConvertidorTemperatura'
import ContadorPalabras from './Pages/ContadorPalabras';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Calculadora />
     <br />
     <Contador />
     <br />
     <Tabla />
     <br />
     <Fibonacci />
     <br />
     <ConvertidorTemperatura />
     <br />
     <ContadorPalabras />
    </>
  )
}

export default App
