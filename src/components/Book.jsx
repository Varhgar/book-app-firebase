import React from 'react';

const Book = ({ book, onRemove, onEdit }) => {
  return (
    <div className="book-item">
      {book.imageUrl ? (
        <img src={book.imageUrl} alt={book.title} />
      ) : (
        <div className="image-placeholder">No Image</div>
      )}
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>{book.author.replace(/^By\s/i, '')}</p>
        <p>({book.year})</p>
        <p>{book.genre}</p>
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

export default Book;
