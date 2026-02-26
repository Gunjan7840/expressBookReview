const express = require('express');
const axios = require('axios');
const router = express.Router();

const books = {
  1: {
    isbn: "1",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    reviews: {}
  },
  2: {
    isbn: "2",
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    reviews: {}
  }
};

// Get all books
router.get('/books', (req, res) => {
  res.json(books);
});

// Get books by ISBN
router.get('/books/isbn/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  res.json(books[isbn]);
});

// Get books by author
router.get('/books/author/:author', (req, res) => {
  const author = req.params.author;
  const result = Object.values(books).filter(
    book => book.author === author
  );
  res.json(result);
});

// Get books by title
router.get('/books/title/:title', (req, res) => {
  const title = req.params.title;
  const result = Object.values(books).filter(
    book => book.title === title
  );
  res.json(result);
});

// Get reviews
router.get('/books/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  res.json(books[isbn].reviews);
});

module.exports = router;
