const express = require('express');
const axios = require('axios');
const router = express.Router();

/*
  Book data source (simulating JSON data provided in assignment)
*/
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

/*
  Route 1: Retrieve all books
  Uses async/await with Axios to demonstrate asynchronous handling.
*/
router.get('/books', async (req, res) => {
  try {
    // Example async HTTP call using Axios
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    // Return full book collection
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books" });
  }
});

/*
  Route 2: Retrieve book by ISBN
  Extracts ISBN from request parameters and returns matching book.
*/
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

/*
  Route 3: Retrieve books by Author
  Filters book collection based on author name from URL parameter.
*/
router.get('/books/author/:author', async (req, res) => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    const author = req.params.author;

    // Filter books where author matches (case-insensitive)
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

/*
  Route 4: Retrieve books by Title
  Filters book collection using title parameter.
*/
router.get('/books/title/:title', async (req, res) => {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    const title = req.params.title;

    // Filter books by title (case-insensitive comparison)
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

/*
  Route 5: Retrieve book reviews by ISBN
  Returns review object associated with the specified book.
*/
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
