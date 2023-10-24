import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Buscador from './Buscador';

function MiApi() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://api.rawg.io/api/games?key=8e17bbbe98754ceda1f98b6fcf662719")
      .then(response => {
        setGames(response.data.results);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos", error);
      });
  }, []);

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedGames = filteredGames.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <Buscador onSearch={setSearchTerm} />
      {sortedGames.map(game => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.background_image} alt={game.name} />
          <p>Rating: {game.rating} / 5</p>
        </div>
      ))}
    </div>
  );
}

export default MiApi;