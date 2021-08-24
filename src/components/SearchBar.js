import React, { useState } from 'react';

const SearchBar = ({ query, setQuery }) => {


  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <div className="ui segment search-bar">
      <form action="" className="ui form" onSubmit={onSubmit}>
        <label htmlFor="">Search for Brewery: Child 1</label>
        <input type="text" onChange={onInputChange} value={query} />
      </form>
    </div>
  );
};

export default SearchBar;

// https://api.openbrewerydb.org/breweries/search?query=dog
