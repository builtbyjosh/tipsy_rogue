import React, { useState } from 'react';

const SearchBar = ({ fetchData }) => {
  const [search, setSearch] = useState('')

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData(search)
  };

  return (
    <div className="ui segment search-bar">
      <form action="" className="ui form" onSubmit={onSubmit}>
        <label htmlFor="">Search for Brewery:</label>
        <input type="text" onChange={onInputChange} value={search} placeholder='search' />

      </form>
    </div>
  );
};

export default SearchBar;

// https://api.openbrewerydb.org/breweries/search?query=dog
