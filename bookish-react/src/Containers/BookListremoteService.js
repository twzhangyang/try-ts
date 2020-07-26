import React, {useEffect, useState} from "react";
import axios from "axios";
import BookList from "../BookList";
import {DialogTitle} from "@material-ui/core";

const useRemoteService = (initial) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios.get('http://localhost:8080/books');
        setBooks(res.data)
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return {books, loading, error}
}

export default useRemoteService;
