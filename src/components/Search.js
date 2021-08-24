import React from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';

const Search = () => {
  return (
    <div>
      <p>Search Bar</p>
      <SearchBar />
      <p>Search List</p>
      <SearchList />
    </div>
  );
};

export default Search;
