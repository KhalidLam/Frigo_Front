import React, { useState } from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  const [num, setNum] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handelClick = (number) => {
    paginate(number);

    console.log(number);
    console.log(pageNumbers.length);
    setNum(number);
  };

  return (
    <div className="uk-margin-large-top uk-text-small">
      <ul
        className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove"
        data-uk-margin
      >
        {num <= 1 ? (
          ""
        ) : (
          <li>
            <a href="#sa" onClick={() => handelClick(num - 1)}>
              <span data-uk-pagination-previous />
            </a>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href={`#${number}`} onClick={() => handelClick(number)}>{number}</a>
          </li>
        ))}

        {num >= pageNumbers.length ? (
          ""
        ) : (
          <li>
            <a href="#sasx" onClick={() => handelClick(num + 1)}>
              <span data-uk-pagination-next />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
