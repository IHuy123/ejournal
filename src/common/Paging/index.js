import React from "react";
function PaginationRe({ page, setPage, count, totalPages }) {
  function changeNumber(n) {
    setPage(n);
  }
  return (
    <div className="pagination__wrapper">
      <ul className="pagination" style={{ display: "-webkit-inline-box" }}>
        <li>
          <button
            className="prev"
            disabled={page === 0}
            onClick={() => changeNumber(page - count)}
          >
            ❮ Prev
          </button>
        </li>
        <li>
          <button
            className="next"
            disabled={page + count >= totalPages}
            onClick={() => changeNumber(page + count)}
          >
            Next ❯
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PaginationRe;
