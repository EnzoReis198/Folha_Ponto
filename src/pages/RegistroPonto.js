import React from 'react';

function RegistroPonto() {
  const handlePonto = (tipo) => {
    console.log(`Ponto ${tipo} registrado!`);
  };

  return (
    <div>
      <h1>Registro de Ponto</h1>
      <button onClick={() => handlePonto('entrada')}>Registrar Entrada</button>
      <button onClick={() => handlePonto('saída')}>Registrar Saída</button>
    </div>
  );
}

export default RegistroPonto;
