const express = require('express');
const axios = require('axios');
const router = express.Router();

// Retrieve all books using Axios (async/await)
router.get('/books', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/books');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books" });
  }
});

// Retrieve books by ISBN
router.get('/books/isbn/:isbn', async (req, res) => {
  try {
    const isbn = req.params.isbn;
    const response = await axios.get(`http://localhost:5000/books/isbn/${isbn}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: "Book not found" });
  }
});

// Retrieve books by Author
router.get('/books/author/:author', async (req, res) => {
  try {
    const author = req.params.author;
    const response = await axios.get(`http://localhost:5000/books`);
    
    const result = Object.values(response.data).filter(
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

// Retrieve books by Title
router.get('/books/title/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const response = await axios.get(`http://localhost:5000/books`);
    
    const result = Object.values(response.data).filter(
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

module.exports = router;
