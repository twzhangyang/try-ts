import React from 'react';
import useRemoteService from "./BookListremoteService";
import BookList from "./BookList";

const BookListContainer = () => {
  const {books, loading, error} = useRemoteService([]);

  return <BookList books={books} loading={loading} error={error} />
}

export default BookListContainer;
