const express = require('express');
const axios = require('axios');
const router = express.Router();

// Sample book data
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

// ✅ Get all books
router.get('/books', async (req, res) => {
  try {
    // Simulate async HTTP call using Axios
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books" });
  }
});

// ✅ Get book by ISBN
router.get('/books/isbn/:isbn', async (req, res) => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    const isbn = req.params.isbn;

    if (!books[isbn]) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(books[isbn]);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving book by ISBN" });
  }
});

// ✅ Get books by Author
router.get('/books/author/:author', async (req, res) => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    const author = req.params.author;

    const result = Object.values(books).filter(
      book => book.author.toLowerCase() === author.toLowerCase()
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "No books found for this author" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books by author" });
  }
});

// ✅ Get books by Title
router.get('/books/title/:title', async (req, res) => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    const title = req.params.title;

    const result = Object.values(books).filter(
      book => book.title.toLowerCase() === title.toLowerCase()
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "No books found with this title" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books by title" });
  }
});

// ✅ Get Reviews
router.get('/books/review/:isbn', async (req, res) => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    const isbn = req.params.isbn;

    if (!books[isbn]) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(books[isbn].reviews);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving reviews" });
  }
});

module.exports = router;
