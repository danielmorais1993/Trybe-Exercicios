import { useState, useEffect } from 'react';

function Pokedex () {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPokeAPI = async () => {
      try {
        const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await api.json();
        setPokemonList(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPokeAPI();
  }, []);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search Pokemon" onChange={handleSearch} />
      <ul>
        {filteredPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pokedex;
