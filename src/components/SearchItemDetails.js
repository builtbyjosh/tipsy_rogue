import React from 'react';

const SearchItemDetails = ({selected}) => {
  return (
    <div>
      <h2>{selected.name}</h2>
      <p>{selected.street}</p>
      <p>{selected.city}, {selected.state}</p>
      <p>{selected.phone}</p>
      <p>{selected.website_url}</p>
    </div>
  );
}

export default SearchItemDetails;
