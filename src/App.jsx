
import './App.css'
import React from 'react';
import MiApi from './components/MiApi';

function App() {
  return (
    <div>
      <h1>Ranking de juegos el Gatito Gordinflón</h1>
      <img className='gatito' src="https://cdn.shopify.com/s/files/1/0060/6692/files/gamercat.png?v=1508615894" alt="gatito" />
      <MiApi />
    </div>
  );
}

export default App;