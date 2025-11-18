import React from 'react';
import '../App.css';

const RecentBooks = ({ books }) => {
  const recentBooks = books.slice(-5).reverse();

  return (
    <div className="sidebar-card">
      <h3>Recently Added</h3>
      <ul>
        {recentBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBooks;