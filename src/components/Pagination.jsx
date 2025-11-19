import React from 'react';

const Pagination = ({ booksPerPage, totalBooks, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) {
    return null;
  }

  const handlePageClick = (e, number) => {
    e.preventDefault();
    onPageChange(number);
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={(e) => handlePageClick(e, number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
