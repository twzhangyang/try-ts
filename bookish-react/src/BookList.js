import React from "react";

const BookList = ({books}) => {
  if(!books){
    return <p>Loading</p>;
  }

  return <div data-test="book-list">
    {
      books.map(x => (<div className="book-item">
        <h2 className="title">{x.name}</h2>
      </div>))
    }
  </div>
}

export default BookList;
