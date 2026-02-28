const express = require('express');
const axios = require('axios');
const router = express.Router();

// Function using Promise Callbacks
function getAllBooksPromise() {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      return books;
    })
    .catch(error => {
      throw error;
    });
}

// Function using async/await
async function getAllBooksAsync() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return books;
  } catch (error) {
    throw error;
  }
}

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

// Retrieve all books using async/await
router.get('/books', async (req, res) => {
  try {
    const data = await getAllBooksAsync();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books" });
  }
});

// Retrieve books by ISBN
router.get('/books/isbn/:isbn', async (req, res) => {
  try {
    const isbn = req.params.isbn;
    if (!books[isbn]) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(books[isbn]);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving book by ISBN" });
  }
});

// Retrieve books by Author
router.get('/books/author/:author', async (req, res) => {
  try {
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

// Retrieve books by Title
router.get('/books/title/:title', async (req, res) => {
  try {
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

module.exports = router;
