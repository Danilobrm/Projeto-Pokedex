import React from 'react';
import Header from '../../components/Home/Header';
import Pokedex from '../../components/Home/Pokedex';
import { Container } from './styled';

export default function Home() {
  return (
    <Container>
      <Header />
      <Pokedex />
    </Container>
  );
}
