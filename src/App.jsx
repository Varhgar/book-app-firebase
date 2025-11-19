import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import Sidebar from './components/Sidebar';
import ConfirmModal from './components/ConfirmModal';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import { initialBooks } from './data/books.js';

function App() {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);

  useEffect(() => {
    try {
      const storedBooks = localStorage.getItem('books');
      if (storedBooks) {
        const parsedBooks = JSON.parse(storedBooks);
        if (Array.isArray(parsedBooks) && parsedBooks.length > 0) {
          setBooks(parsedBooks);
        } else {
          setBooks(initialBooks);
        }
      } else {
        setBooks(initialBooks);
      }
    } catch (error) {
      console.error("Failed to load or parse books from localStorage, resetting to initial data.", error);
      setBooks(initialBooks);
    }
  }, []);

  useEffect(() => {
    if (books.length > 0) {
      try {
          localStorage.setItem('books', JSON.stringify(books));
      } catch (error) {
          console.error("Failed to save books to localStorage", error);
      }
    }
  }, [books]);

  const handleAddBook = (newBook) => {
    const bookWithId = { ...newBook, id: Date.now() };
    setBooks([bookWithId, ...books]);
    setIsModalOpen(false);
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setIsModalOpen(false);
    setBookToEdit(null);
  };

  const handleEditBook = (book) => {
    setBookToEdit(book);
    setIsModalOpen(true);
  };

  const handleRemoveRequest = (bookId) => {
    setBookToDelete(bookId);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmRemove = () => {
    let updatedBooks = books.filter((book) => book.id !== bookToDelete);
    if (updatedBooks.length === 0) {
      localStorage.removeItem('books');
      updatedBooks = initialBooks;
    }
    setBooks(updatedBooks);
    setIsConfirmModalOpen(false);
    setBookToDelete(null);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setBookToDelete(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredBooks = books.filter((book) => {
    const query = searchQuery.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
    );
  });

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="App">
      <Header
        bookCount={books.length}
        onAddBook={() => setIsModalOpen(true)}
      />
      <SearchBar onSearch={handleSearch} />

      <div className="main-content">
        <div className="book-list-container">
          <BookList
            books={currentBooks}
            onRemove={handleRemoveRequest}
            onEdit={handleEditBook}
          />
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={filteredBooks.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
        <Sidebar books={books} />
      </div>

      {isModalOpen && (
        <AddBook
          onAdd={handleAddBook}
          onUpdate={handleUpdateBook}
          onClose={() => {
            setIsModalOpen(false);
            setBookToEdit(null);
          }}
          bookToEdit={bookToEdit}
        />
      )}

      {isConfirmModalOpen && (
        <ConfirmModal
          message={`Are you sure you want to remove "${books.find(book => book.id === bookToDelete)?.title}"?`}
          onConfirm={handleConfirmRemove}
          onCancel={handleCloseConfirmModal}
        />
      )}
    </div>
  );
}

export default App;
