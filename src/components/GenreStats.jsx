import React from 'react';

const GenreStats = ({ books }) => {
  const genres = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="sidebar-card">
      <h3>Books by Genre</h3>
      <ul>
        {Object.entries(genres).map(([genre, count]) => (
          <li key={genre} className="genre-stats-item">
            <span>{genre}</span>
            <span>{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreStats;
