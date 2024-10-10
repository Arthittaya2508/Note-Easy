const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth"); // นำเข้า auth routes
const notesRoutes = require("./routes/notes"); // นำเข้า notes routes

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ใช้ router สำหรับการล็อกอิน
app.use("/api", authRoutes);
// ใช้ router สำหรับโน้ต
app.use("/api", notesRoutes);

// เริ่มเซิร์ฟเวอร์
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
