import React from "react";
import {Link} from "react-router-dom";

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
        <Link to={`/books/${x.id}`}>View Details</Link>
      </div>))
    }
  </div>
}

export default BookList;
