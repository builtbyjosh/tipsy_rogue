import React, {useState} from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';
import instance from '../axios';

const Search = () => {  
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
      <SearchBar fetchData={fetchData} />
      <SearchList results={results} />
      
    </div>
  );
};

export default Search;
