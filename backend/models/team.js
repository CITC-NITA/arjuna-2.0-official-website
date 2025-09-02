// backend/models/Team.js
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  whatsapp: String,
  email: String,
});

const teamSchema = new mongoose.Schema({
  teamName: String,
  problemStatement: String,
  leaderName: String,
  leaderWhatsapp: String,
  leaderEmail: String,
  members: [memberSchema],
  collegeName: String,
  collegeAddress: String,
  city: String,
  state: String,
  pincode: String,
  referralSource: String,
});

module.exports = mongoose.model("Team", teamSchema);
