import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';
import SearchBar from './Search-Bar/index.js';
import Sort from './Sort/index.js';

export default function Header() {
  return (
    <>
      <Nav>
        <img
          src="https://img.icons8.com/ios-filled/30/1A1A1A/pokeball--v2.png"
          alt="pokeball"
        />
        <Link to="/">Pokédex</Link>
        <Sort />
      </Nav>
      <SearchBar />
    </>
  );
}
