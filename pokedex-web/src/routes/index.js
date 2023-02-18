import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index.js';
import Pokemon from '../pages/Pokemon/index.js';

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
  );
}
