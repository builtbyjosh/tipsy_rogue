import React from 'react';

const SearchItem = ({ result, setSelected }) => {
  return (
    <li
      key={result.id}
      onClick={() => setSelected(result)}
      style={{ cursor: 'pointer' }}
    >
      {result.name}
    </li>
  );
};

export default SearchItem;
