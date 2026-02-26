const express = require('express');
const axios = require('axios');
const router = express.Router();

// Local book data (simulating JSON source)
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

// ✅ Get all books (async/await)
router.get('/books', async (req, res) => {
  try {
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books" });
  }
});

// ✅ Get book by ISBN (async/await)
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

// ✅ Get books by author (Axios + async/await)
router.get('/books/author/:author', async (req, res) => {
  try {
    const author = req.params.author;

    // Simulating async Axios operation
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

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

// ✅ Get books by title (async/await)
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

// ✅ Get book reviews (async/await)
router.get('/books/review/:isbn', async (req, res) => {
  try {
    const isbn = req.params.isbn;
    if (!books[isbn]) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(books[isbn].reviews);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving reviews" });
  }
});

module.exports = router;const express = require('express');
const axios = require('axios');
const router = express.Router();

// Local book data (simulating JSON source)
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

// ✅ Get all books (async/await)
router.get('/books', async (req, res) => {
  try {
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books" });
  }
});

// ✅ Get book by ISBN (async/await)
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

// ✅ Get books by author (Axios + async/await)
router.get('/books/author/:author', async (req, res) => {
  try {
    const author = req.params.author;

    // Simulating async Axios operation
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

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

// ✅ Get books by title (async/await)
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

// ✅ Get book reviews (async/await)
router.get('/books/review/:isbn', async (req, res) => {
  try {
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
