import React, { useState } from 'react';
import { SearchBarStyle } from './styled';

export default function SearchBar() {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <SearchBarStyle
      type="search"
      placeholder="Procurar"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
}
