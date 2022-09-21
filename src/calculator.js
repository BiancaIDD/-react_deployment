import React, { useState } from "react";

export default function Suma() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleAInput = (event) => {
    setA(event.target.value);
  };

  const handleBInput = (event) => {
    setB(event.target.value);
  };

  function calcularSuma() {
    const X = parseInt(a) + parseInt(b);
    setResultado(X);
    setA("");
    setB("");
  }
  return (
    <div>
      <h4> Sumar dos numeros </h4>
      <input type="text" value={a} onChange={handleAInput} />
      <input type="text" value={b} onChange={handleBInput} />
      <button  value="calcular" onClick={calcularSuma}>Calcular</button>
      <p>Tu Resultado es: {resultado}</p>
    </div>
  );
}
