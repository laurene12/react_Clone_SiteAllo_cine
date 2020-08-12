import React from "react";

const PaginationMovies = ({ moviesOnPage, totalMovies, paginate }) => {
  const pagesNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesOnPage); i++) {
    pagesNumbers.push(i);
  }
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination pagination-lg">
          {pagesNumbers.map((number) => {
            return (
              <li className="page-item" key={number}>
                <span className="page-link" onClick={() => paginate(number)}>
                  {" "}
                  {number}{" "}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationMovies;
