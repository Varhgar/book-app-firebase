import React, { useState, useEffect } from 'react';
import '../App.css';

const AddBook = ({ onAdd, onUpdate, onClose, bookToEdit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setYear(bookToEdit.year);
      setGenre(bookToEdit.genre);
      setImageUrl(bookToEdit.imageUrl || '');
    } else {
      setTitle('');
      setAuthor('');
      setYear('');
      setGenre('');
      setImageUrl('');
    }
  }, [bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookToEdit) {
      onUpdate({ ...bookToEdit, title, author, year, genre, imageUrl });
    } else {
      onAdd({ title, author, year, genre, imageUrl });
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{bookToEdit ? 'Edit Book' : 'Add Book'}</h2>
        <form onSubmit={handleSubmit} className="add-book-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit">{bookToEdit ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
