import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search"
        id="Search"
        className="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
