// routes/notes.js
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// สร้างการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jayping093313",
  database: "note_easy",
});

// Route สำหรับเพิ่มโน้ต
router.post("/notes", (req, res) => {
  const { user_id, title, content } = req.body;

  const sql = "INSERT INTO notes (user_id, title, content) VALUES (?, ?, ?)";
  db.query(sql, [user_id, title, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, user_id, title, content });
  });
});

// Route สำหรับดึงข้อมูลโน้ตทั้งหมด
router.get("/notes", (req, res) => {
  const sql = "SELECT * FROM notes";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
