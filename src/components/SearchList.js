import React, { useState } from 'react';
import SearchItem from './SearchItem';
import SearchItemDetails from './SearchItemDetails';

const SearchList = ({ results }) => {
  const [selected, setSelected] = useState({});

  return (
    <div>
      
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
          <h3 className="ui left floated header">Details</h3>
          <div className="ui clearing divider"></div>
            <ul>
              {results.map((result) => (
                <SearchItem result={result} setSelected={setSelected} />
              ))}
            </ul>
          </div>
          <div className="column">
            <h3 className="ui right floated header">Details</h3>
            <div className="ui clearing divider"></div>
            <SearchItemDetails selected={selected} />
          </div>
        </div>
        <div className="ui vertical divider"></div>
      </div>
    </div>
  );
};

export default SearchList;
