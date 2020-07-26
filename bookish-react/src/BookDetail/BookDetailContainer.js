import React from 'react';
import BookDetailRemoteService from "./BookDetailRemoteService";
import BookDetail from "./BookDetail";

const BookDetailContainer = ({match}) => {
  const {book} = BookDetailRemoteService({match});

  return <BookDetail book={book} />
}

export default BookDetailContainer;
