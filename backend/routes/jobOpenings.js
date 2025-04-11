// backend/routes/jobOpenings.js
const express = require("express");
const JobOpening = require("../models/JobOpening");
const router = express.Router();

// CREATE a new job opening
router.post("/create", async (req, res) => {
  const { title, location, startDate, description, openings } = req.body;
  try {
    const newJob = new JobOpening({ title, location, startDate, description, openings });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ error: "Error creating job opening" });
  }
});

// READ all job openings
router.get("/", async (req, res) => {
  try {
    const jobOpenings = await JobOpening.find();
    res.status(200).json(jobOpenings);
  } catch (error) {
    res.status(400).json({ error: "Error fetching job openings" });
  }
});

// UPDATE a job opening
router.put("/:id", async (req, res) => {
  const { title, location, startDate, description, openings } = req.body;
  try {
    const updatedJob = await JobOpening.findByIdAndUpdate(
      req.params.id,
      { title, location, startDate, description, openings },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(400).json({ error: "Error updating job opening" });
  }
});

// DELETE a job opening
router.delete("/:id", async (req, res) => {
  try {
    await JobOpening.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Job opening deleted" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting job opening" });
  }
});

module.exports = router;
