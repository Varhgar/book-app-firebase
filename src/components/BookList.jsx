import React from 'react';
import BookItem from './BookItem';
import '../App.css';

const BookList = ({ books, onRemove, onEdit }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default BookList;
