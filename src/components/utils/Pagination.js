import { useState } from "react";

const Pagination = ({ totalCount, pageSize, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(totalCount / pageSize);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <nav
      aria-label="paginationbar"
      className="flex justify-center md:justify-center lg:ml-52 lg:mr-96 mt-10"
    >
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`px-3 py-2 leading-tight ${
                currentPage === page
                  ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
