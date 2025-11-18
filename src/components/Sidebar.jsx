import React from 'react';
import RecentBooks from './RecentBooks';
import TopAuthors from './TopAuthors';
import GenreStats from './GenreStats';
import '../App.css';

const Sidebar = ({ books }) => {
  return (
    <div className="sidebar">
      <RecentBooks books={books} />
      <TopAuthors books={books} />
      <GenreStats books={books} />
    </div>
  );
};

export default Sidebar;