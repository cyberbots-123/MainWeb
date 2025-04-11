const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    grade: { type: String, required: true },
    institutionName: { type: String, required: true },
    learningMode: [{ type: String }],
    parentName: { type: String, required: true },
    relationship: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    alternateMobile: { type: String },
    emailAddress: { type: String, required: true },
    communicationAddress: { type: String, required: true },
    courseSelection: { type: String, required: true },
    declaration: { type: Boolean, required: true },
    consentParticipation: { type: Boolean, required: true },
    termsAgreement: { type: Boolean, required: true },
    photoConsent: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
