const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application');

// File storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post(
  '/',
  upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'photo', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const {
        fullName, dob, gender, email, contact, alternateContact,
        currentAddress, permanentAddress, degree, specialization,
        position, workLocation, availability, expectedSalary,
        relocate, travel, heardFrom, referralName, reasonToJoin, otherInfo
      } = req.body;

      const newApp = new Application({
        fullName,
        dob,
        gender,
        email,
        contact,
        alternateContact,
        currentAddress,
        permanentAddress,
        degree,
        specialization,
        position,
        workLocation,
        availability,
        expectedSalary,
        relocate,
        travel,
        heardFrom,
        referralName,
        reasonToJoin,
        otherInfo,
        resumePath: req.files?.resume?.[0]?.path || '',
        photoPath: req.files?.photo?.[0]?.path || ''
      });

      await newApp.save();
      res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

router.get('/', async (req, res) => {
    try {
      const applications = await Application.find().sort({ createdAt: -1 });
      res.status(200).json(applications);
    } catch (err) {
      console.error("Error fetching applications:", err);
      res.status(500).json({ message: "Server Error" });
    }
  });
  

module.exports = router;
