import React from 'react';
import Header from '../../components/Pokemon/Header';
import PokemonStats from '../../components/Pokemon/Pokemon-Stats';
import { Container } from './styled';

export default function Pokemon() {
  return (
    <Container>
      <Header />
      <PokemonStats />
    </Container>
  );
}
