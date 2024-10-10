// routes/auth.js
const express = require("express");
const router = express.Router();

// Mock database of users
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

// Route for login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

module.exports = router;
