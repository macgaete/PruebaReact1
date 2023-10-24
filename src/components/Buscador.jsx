import React, { useState } from 'react';

function Buscador({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleInputChange = (event) => {
    setTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar videojuego..." 
        value={term} 
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Buscador;
