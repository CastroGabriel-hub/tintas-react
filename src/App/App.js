import { useState } from 'react';
import './App.css';

function App() {
  const [area, setArea] = useState(0);
  const [message, setMessage] = useState('');

  function latas(){
    let litersNeeded = area / 6;
    let latasNeeded = Math.round(litersNeeded / 18);
    latasNeeded === 0 ? latasNeeded = 1 : latasNeeded = latasNeeded;
    let latasPrice = latasNeeded * 80;
    
    setMessage(`Você precisa comprar ${latasNeeded} latas de tinta, que custarão R$ ${latasPrice}`);
  }

  function galoes(){
    let litersNeeded = area / 6;
    let galoesNeeded = Math.round(litersNeeded / 3.6);
    galoesNeeded === 0 ? galoesNeeded = 1 : galoesNeeded = galoesNeeded;
    let galoesPrice = galoesNeeded * 25;

    setMessage(`Você precisa comprar ${galoesNeeded} galões de tinta, que custarão R$ ${galoesPrice}`);
  }

  return (
    <div className="app">
      <label>Área a ser pintada: </label>
      <input 
        type="number"
        value={area}
        onChange={(event) => setArea(event.target.value)}
      />

      <button onClick={latas}>Apenas latas de 18L</button>
      <button onClick={galoes}>Apenas galões de 3,6L</button>

      <p>{ message }</p>
    </div>
  );
}

export default App;
