const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: String,
  dob: String,
  gender: String,
  email: String,
  contact: String,
  alternateContact: String,
  currentAddress: String,
  permanentAddress: String,
  degree: String,
  specialization: String,
  position: String,
  workLocation: String,
  availability: String,
  expectedSalary: String,
  relocate: String,
  travel: String,
  heardFrom: String,
  referralName: String,
  reasonToJoin: String,
  otherInfo: String,
  resumePath: String,
  photoPath: String,
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
