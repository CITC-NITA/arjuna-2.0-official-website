const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database/config"); 
const Team = require("./models/team");

dotenv.config();

// Connect DB (Atlas)
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
