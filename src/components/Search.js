import React, { useState } from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';
import instance from '../axios';

const Search = () => {
  const [results, setResults] = useState([]);

  async function fetchData(query) {
    const req = await instance.get(query);
    console.log(req);
    setResults(req.data);
  }

  return (
    <div>
      <SearchBar fetchData={fetchData} />
      <SearchList results={results} />
    </div>
  );
};

export default Search;
