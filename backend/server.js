const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const jobOpeningsRoutes = require("./routes/jobOpenings");
const courseRoutes = require("./routes/courses");
const contactRoutes = require("./routes/contactRoutes");
const applicationRoutes = require('./routes/applicationRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database connection error", err));

app.use("/api/jobopenings", jobOpeningsRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/contact", contactRoutes);
app.use('/api/applications', applicationRoutes);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
