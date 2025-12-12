import React, { useState } from 'react';

function PageNatation({ totalPages = 10, onPageChange, pageFn }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    pageFn(page - 1);
    if (onPageChange) onPageChange(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const pageGroup = Math.ceil(currentPage / 5);
    const startPage = (pageGroup - 1) * 5 + 1;
    const endPage = Math.min(pageGroup * 5, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {/* pre btn */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? '' : 'lg:hover:cursor-pointer'
        } w-10 h-10 rounded-md bg-white text-gray-deep border border-main-01 hover:bg-main-01 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300`}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* page num*/}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`lg:hover:cursor-pointer w-10 h-10 rounded-md transition-colors duration-300 ${
            currentPage === page
              ? 'bg-point text-white'
              : 'bg-white text-gray-deep border border-main-01 hover:bg-light-01'
          }`}
        >
          {page}
        </button>
      ))}

      {/* next btn  */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages ? '' : 'lg:hover:cursor-pointer'
        } w-10 h-10 rounded-md bg-white text-gray-deep border border-main-01 hover:bg-light-01 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300`}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default PageNatation;
