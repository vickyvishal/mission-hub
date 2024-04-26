const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3000;
const missions = require("./data/missions.json");
const spacecrafts = require("./data/spacecrafts.json");

// Route to serve the list
app.get("/api/missions", (req, res) => {
  res.json(missions);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
