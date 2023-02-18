import React from 'react';
import { Sort } from './styled';

export default function Header() {
  return (
    <Sort>
      <button type="button" className="sort">
        <div>
          <p>A</p>
          <p>Z</p>
        </div>
        <span>SORT</span>
      </button>
    </Sort>
  );
}
