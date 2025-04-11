const express = require("express");
const { registerCourse, getCourses } = require("../controllers/courseController");

const router = express.Router();

router.post("/register", registerCourse);
router.get("/courses", getCourses);

module.exports = router;
