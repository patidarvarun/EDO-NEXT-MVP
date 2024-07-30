// Pagination.tsx
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChangePage,
}) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onChangePage(page);
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div
      className="flex justify-center border border-[#E9E9F0] rounded-lg p-1"
    >
      {/* <span className="px-2 py-1 text-black flex flex-row items-center ">
        {currentPage} / {totalPages}
      </span> */}
       <span className="px-2 py-1 text-black flex flex-row items-center ">
        {currentPage}
        <span className="text-gray-500 mx-1">/ {totalPages}</span>
       
      </span>

      <button
        className={`disabled:opacity-50 px-2 py-1 rounded-md mr-[3px] mr-[3px]${
          isFirstPage
            ? "bg-[#E1E1FF] "
            : " hover:bg-[#E1E1FF] text-gray-800 font-bold rounded inline-flex items-center"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <img
          src="/assets/images/arrow-right.svg"
          alt="Logo"
          className="w-5 h-6"
        />
      </button>
      <button
        className={`disabled:opacity-50 px-2 py-1 rounded-md mr-[3px]${
          isFirstPage
            ? "bg-[#E1E1FF] "
            : " hover:bg-[#E1E1FF] text-gray-800 font-bold  rounded inline-flex items-center"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        <img
          src="/assets/images/arrow-left.svg"
          alt="Logo"
          className="w-5 h-6"
        />
      </button>

      <button
        className={`disabled:opacity-50 px-2 py-1 rounded-md ${
          isFirstPage
            ? "bg-gray "
            : " hover:bg-[#E1E1FF] text-gray-800 font-bold  rounded inline-flex items-center"
        }`}
        onClick={() => handlePageChange(totalPages)}
        disabled={isLastPage}
      >
        <img src="/assets/images/arrows.svg" alt="Logo" className="w-4 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
