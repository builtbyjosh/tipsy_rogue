import React, { useState, useEffect } from 'react';

import axios from 'axios';


const SearchList = ({query}) => {
  const [results, setResults] = useState([]);
    

  useEffect(() => {   
    axios.get(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
    .then( res => {
      // setResults(res.data)
      console.log(results)
    })
    .catch( err => {
      console.log(err)
    })    
  })

  return (
    
    <div>
      <h3>Results - Child 2</h3>
      <p>{results}</p>
    </div>
  );
};

export default SearchList;
