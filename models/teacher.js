const mongoose = require("../db/connection");

const teacherSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String },
    idiom1: { type: String, required: true },
    idiom2: { type: String },
    idiom3: { type: String },
    language: { type: String },
    teachingStyle: { type: String },
    online: { type: Boolean, default: false },
    studentRoster: { type: Boolean, default: false },
    student: { type: Boolean, default: false },
    teacher: { type: Boolean, default: false },
});

const Teacher = mongoose.model("teacher", teacherSchema);

module.exports = Teacher;
