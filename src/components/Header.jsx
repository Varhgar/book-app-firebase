import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import '../App.css';

const Header = ({ onAddBook, bookCount }) => {
  const { user } = useAuth();

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout failed", error);
    });
  };

  return (
    <header className="header">
      <div className="title-container">
        <h1 className="title">C & R Books</h1>
        <p className="subtitle">{bookCount} books in your library</p>
      </div>
      <div className="header-actions">
        <button className="add-book-button-header" onClick={onAddBook}>
          + Add Book
        </button>
        {user && (
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
