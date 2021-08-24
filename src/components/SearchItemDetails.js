import React from 'react';

const SearchItemDetails = ({selected}) => {
  return (
    <div>
      <h2>{selected.name}</h2>
      <p>{selected.street}</p>
      <p>{selected.city}, {selected.state}</p>
      <p>{selected.phone}</p>
      <a href={selected.website_url}>{selected.website_url}</a>
    </div>
  );
}

export default SearchItemDetails;
