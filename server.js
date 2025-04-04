// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

app.get("/api/check", (req, res) => {
  res.json({ message: "Terhubung bro!" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server jalan di http://0.0.0.0:${port}`);
});
