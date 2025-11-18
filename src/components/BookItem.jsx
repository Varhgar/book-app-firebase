import React from 'react';
import '../App.css';

const BookItem = ({ book, onRemove, onEdit }) => {
  return (
    <div className="book-item">
      {book.image ? (
        <img src={book.image} alt={book.title} />
      ) : (
        <div className="image-placeholder">No Image</div>
      )}
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
        <p>{book.genre} - {book.year}</p>
      </div>
      <div className="book-item-buttons">
        <button className="edit-button" onClick={() => onEdit(book)}>
          Edit
        </button>
        <button className="remove-button" onClick={() => onRemove(book.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default BookItem;
