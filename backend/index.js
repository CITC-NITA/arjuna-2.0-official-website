// backend/index.js
const express = require("express");
const cors = require("cors");
const db = require("./database/config"); // connect DB
const Team = require("./models/team");

const app = express();
app.use(cors());
app.use(express.json()); // so we can read JSON from frontend

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is working");
});

// API to handle form submission
app.post("/api/register", async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    await newTeam.save();
    res.status(201).send({ message: "Team registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Error saving data" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
