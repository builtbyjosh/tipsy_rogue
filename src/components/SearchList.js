import React, { useState } from 'react';
import SearchItem from './SearchItem';
import SearchItemDetails from './SearchItemDetails';

const SearchList = ({ results }) => {
  const [selected, setSelected] = useState({});

  return (
    <div>
      <h3>Results - Child 2</h3>

      <ul>
        {results.map((result) => (
          <SearchItem result={result} setSelected={setSelected} />
        ))}
      </ul>

      <SearchItemDetails selected={selected} />
    </div>
  );
};

export default SearchList;
