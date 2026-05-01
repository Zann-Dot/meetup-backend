import { initializeDatabase } from "./db/db.connect.js";
import Events from "./models/meetup.models.js";
import express from "express";
import cors from "cors";
const app = express();
const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOption));
initializeDatabase();

import fs from "fs";
const jsondata = fs.readFileSync("seedingData/eventsData.json");
const eventsData = JSON.parse(jsondata);
const PORT = 3000;

app.get("/events", async (req, res) => {
  try {
    const events = await Events.find();
    if (events.length === 0)
      return res.status(404).json({ error: "Book not found" });

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
