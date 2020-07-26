import React from 'react';
import useRemoteService from "./BookListremoteService";
import BookList from "../BookList";

const BookListContainer = () => {
  const {data, loading, error} = useRemoteService([]);
  console.log(data);

  return <BookList books={data} loading={loading} error={error} />
}

export default BookListContainer;
