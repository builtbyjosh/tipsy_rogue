import React, { useState } from 'react';

const SearchBar = ({ setQuery, fetchData }) => {
  const [search, setSearch] = useState('')


  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search)
    console.log(`submitted ${search}`)
    fetchData(search)
  };

  return (
    <div className="ui segment search-bar">
      <form action="" className="ui form" onSubmit={onSubmit}>
        <label htmlFor="">Search for Brewery: Child 1</label>
        <input type="text" onChange={onInputChange} value={search} />

      </form>
    </div>
  );
};

export default SearchBar;

// https://api.openbrewerydb.org/breweries/search?query=dog
