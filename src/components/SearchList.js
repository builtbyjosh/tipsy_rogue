import React, { useState } from 'react';


const SearchList = ({ results }) => {
  return (
    <div>
      <h3>Results - Child 2</h3>

      <ul>
        {results.map((result) => (
          <li kwy={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
