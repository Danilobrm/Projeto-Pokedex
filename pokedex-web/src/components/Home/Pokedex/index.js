import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/axios';
import { PokedexStyle } from './styled';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemonsFirstGen() {
      const response = await axios.get('generation/1');
      const array = response.data.pokemon_species;
      const arrayPokemons = await Promise.all(
        array.map(async (pokemon) => {
          const dados = await axios.get(pokemon.url);
          return dados.data;
        }),
      );
      setPokemons(arrayPokemons);
    }
    loadPokemonsFirstGen();
  }, []);

  return (
    <>
      <PokedexStyle>
        {pokemons.map((pokemon) => {
          const { id } = pokemon;

          return (
            <Link
              to={`/pokemon/${id}`}
              key={pokemon.name}
              className="pokemon-card"
              style={{ borderColor: `${pokemon.color.name}` }}
            >
              <span>
                <div style={{ color: `${pokemon.color.name}` }} className="id">
                  #{id}
                </div>
              </span>

              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt={pokemon.name}
              />
              <h1 style={{ background: `${pokemon.color.name}` }}>
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </h1>
            </Link>
          );
        })}
      </PokedexStyle>
    </>
  );
}
