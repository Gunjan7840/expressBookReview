const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

let users = [];

const books = {
  1: {
    reviews: {}
  },
  2: {
    reviews: {}
  }
};

// Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ message: "User successfully registered" });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid login" });
  }

  const token = jwt.sign({ username }, "secretkey");
  res.json({ message: "Login successful", token });
});

// Add or modify review
router.put('/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const review = req.query.review;
  books[isbn].reviews["user"] = review;
  res.json({ message: "Review added/updated", reviews: books[isbn].reviews });
});

// Delete review
router.delete('/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  delete books[isbn].reviews["user"];
  res.json({ message: "Review deleted" });
});

module.exports = router;
