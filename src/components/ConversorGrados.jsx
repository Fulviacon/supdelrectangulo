import React, { useState } from 'react';

const ConversorGrados = () => {
  const [resultado, setResultado] = useState(0);

  const convertirGrados = (e) => {  
    let gradosCentígrados = parseFloat(e.target.value);
    let gradosFahrenheit = (gradosCentígrados * 9 / 5) + 32;
    setResultado(gradosFahrenheit);

  }
 if (gradosCentígrados === "") {   
  setResultado (0);
}
  return (
    <div>
      <h4>Ingresa Grados Centígrados</h4>
      <input type="text" onChange={convertirGrados} />
      <h1>Son {resultado} grados Fahrenheit</h1>
    </div>
  );
}

export default ConversorGrados;


