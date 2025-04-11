// backend/models/JobOpening.js
const mongoose = require("mongoose");

const jobOpeningSchema = new mongoose.Schema({
  title: String,
  location: String,
  startDate: String,
  description: String,
  openings: Number,
});

module.exports = mongoose.model("JobOpening", jobOpeningSchema);
