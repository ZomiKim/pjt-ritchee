import React, { useState, useEffect } from 'react';

function PageNatation({
  totalElements = 0, // 서버에서 받아온 총 병원 수
  pageSize = 10, // 한 페이지에 보여줄 병원 수
  currentPage = 0, // 0-based
  pageFn, // 클릭 시 호출
}) {
  const [internalCurrentPage, setInternalCurrentPage] = useState(
    currentPage + 1
  );

  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalElements / pageSize);

  // 외부 currentPage 변경 시 내부 상태 동기화
  useEffect(() => {
    setInternalCurrentPage(currentPage + 1); // 1-based로 변환
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setInternalCurrentPage(page);
    if (pageFn) pageFn(page - 1); // 0-based로 전달
  };

  // 페이지 번호 그룹 계산 (5개씩 그룹화)
  const getPageNumbers = () => {
    const pages = [];
    const pageGroup = Math.ceil(internalCurrentPage / 5);
    const startPage = (pageGroup - 1) * 5 + 1;
    const endPage = Math.min(pageGroup * 5, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (totalPages === 0) return null; // 페이지가 없으면 렌더링 X

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {/* 이전 버튼 */}
      <button
        onClick={() => handlePageChange(internalCurrentPage - 1)}
        disabled={internalCurrentPage === 1}
        className={`${
          internalCurrentPage === 1 ? '' : 'lg:hover:cursor-pointer'
        } w-10 h-10 rounded-md bg-white text-gray-deep border border-main-01 hover:bg-main-01 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300`}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* 페이지 번호 */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`lg:hover:cursor-pointer w-10 h-10 rounded-md transition-colors duration-300 ${
            internalCurrentPage === page
              ? 'bg-point text-white'
              : 'bg-white text-gray-deep border border-main-01 hover:bg-light-01'
          }`}
        >
          {page}
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        onClick={() => handlePageChange(internalCurrentPage + 1)}
        disabled={internalCurrentPage === totalPages}
        className={`${
          internalCurrentPage === totalPages ? '' : 'lg:hover:cursor-pointer'
        } w-10 h-10 rounded-md bg-white text-gray-deep border border-main-01 hover:bg-light-01 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300`}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default PageNatation;
