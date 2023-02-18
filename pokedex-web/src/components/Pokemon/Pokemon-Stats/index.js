import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../services/axios';
import { Container } from './styled';

export default function PokemonStats() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const { id } = useParams();
  useEffect(() => {
    async function loadPokemonColor() {
      const response = await axios.get(`/pokemon-species/${id}`);
      setName(response.data.name);
      setColor(response.data.color.name);
    }
    loadPokemonColor();
  }, [id]);

  return (
    <Container style={{ backgroundColor: `${color}` }}>
      <div>
        <img
          className="backgroundPokeball"
          src="https://img.icons8.com/sf-regular-filled/500/FFFFFF/pokeball.png"
          alt="pokeball"
        />
        <img
          className="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={name}
        />
      </div>
    </Container>
  );
}
