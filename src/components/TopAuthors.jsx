import React from 'react';

const TopAuthors = ({ books }) => {
  const authors = books.reduce((acc, book) => {
    acc[book.author] = (acc[book.author] || 0) + 1;
    return acc;
  }, {});

  const sortedAuthors = Object.entries(authors)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="sidebar-card">
      <h3>Top Authors</h3>
      <ul>
        {sortedAuthors.map(([author, count]) => (
          <li key={author} className="top-author-item">
            <span>{author}</span>
            <span>{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopAuthors;
