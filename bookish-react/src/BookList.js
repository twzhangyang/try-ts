import React from "react";

const BookList = ({books, loading, error}) => {
  if(loading){
    return <p>Loading</p>;
  }

  if(error){
    return <p>Error</p>
  }

  return <div data-test="book-list">
    {
      books.map(x => (<div className="book-item" key={x.id}>
        <h2 className="title">{x.name}</h2>
        <a href={`/books/${x.id}`}>View Details</a>
      </div>))
    }
  </div>
}

export default BookList;
