import React from "react";

const PageList = ({
  currentPage,
  handleClick,
  handleNext,
  handlePrevious,
  totalPages,
}) => {
  return (
    <>
      <button disabled={currentPage === 0} onClick={handlePrevious}>
        {"<"}
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
      <button disabled={currentPage === totalPages - 1} onClick={handleNext}>
        {">"}
      </button>
    </>
  );
};

export default PageList;
