import React from 'react';
import '../App.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
