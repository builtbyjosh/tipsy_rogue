import React, {useState} from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';
import instance from '../axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchData = query => {
    instance.get(`${query}`)
    .then((res) => {
      setResults(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  
  return (
    <div>
      <p>parent</p>
      <SearchBar setQuery={setQuery} fetchData={fetchData} />
      <SearchList results={results} />
      
    </div>
  );
};

export default Search;
