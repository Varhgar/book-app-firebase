import React from 'react';
import '../App.css';

const Header = ({ onAddBook, bookCount }) => {
  return (
    <header className="header">
      <div className="title-container">
        <h1 className="title">C & R Books</h1>
        <p className="subtitle">{bookCount} books in your library</p>
      </div>
      <button className="add-book-button-header" onClick={onAddBook}>
        + Add Book
      </button>
    </header>
  );
};

export default Header;
