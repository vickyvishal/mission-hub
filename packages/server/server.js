const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3000;
const missions = require("./data/missions.json");

app.get("/missions", (req, res) => {
  res.json(missions);
});

app.get("/events", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  setInterval(() => {
    const mission = missions[Math.floor(Math.random() * missions.length)];
    res.write(
      `data: ${JSON.stringify(mission.name)}: ${JSON.stringify(
        mission.recent_update
      )}\n\n`
    );
  }, 5000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
