import React, {useState} from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';

const Search = () => {
  const [query, setQuery] = useState('');

  
  return (
    <div>
      <p>parent</p>
      <SearchBar setQuery={setQuery} query={query} />
      <SearchList query={query} />
    </div>
  );
};

export default Search;
