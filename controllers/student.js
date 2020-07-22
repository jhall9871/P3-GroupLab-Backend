const express = require("express");
const router = express.Router();

// Require the student and teacher models.
const Student = require("../models/student");
const Teacher = require("../models/teacher");

// List all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find({}).populate("myTeachers");
    res.send(students);
  } catch {
    res.send("nope");
  }
});

// Get student by last name
router.get("/:lastname", async (req, res) => {
  try {
    const student = await Student.find({
      lastName: req.params.lastname,
    }).populate("myTeachers");
    res.send(student);
  } catch {
    res.send("nope");
  }
});

// Get student by email
router.get("/email/:email", async (req, res) => {
  try {
    const student = await Student.find({
      email: req.params.email,
    }).populate("myTeachers");
    res.send(student);
  } catch {
    res.send("nope");
  }
});

// Create a student
router.post("/", (req, res) => {
  Student.create(req.body, (err, student) => {
    if (err) console.log(err);
    else res.send(student);
  });
});

// Update a student by id
router.put("/:id", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updated) => {
      if (err) console.log(err);
      else res.send(updated);
    }
  );
});

// Delete a student by id
router.delete("/:id", (req, res) => {
  Student.deleteOne({ _id: req.params.id }, (err, deleted) => {
    if (err) console.log(err);
    else res.send(deleted);
  });
});

// Add teacher to student's myTeachers (addConnectionButton)
router.put("/:studentid/addTeacher/:teacherid", (req, res) => {
  Teacher.findById(req.params.teacherid, (err, teacher) => {
    if (err) console.log(err);
    else {
      Student.findByIdAndUpdate(
        req.params.studentid,
        {
          $push: {
            myTeachers: teacher,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else res.send(student);
        }
      );
    }
  });
});

// Remove single teacher from student's myTeachers (works!)
router.delete("/:studentid/removeTeacher/:teacherid", (req, res) => {
  Teacher.findById(req.params.teacherid, (err, teacher) => {
    if (err) console.log(err);
    else {
      Student.findByIdAndUpdate(
        req.params.studentid,
        {
          $pull: {
            myTeachers: teacher._id,
          },
        },
        { new: true },
        (err, student) => {
          if (err) console.log(err);
          else res.send(student);
        }
      );
    }
  });
});

module.exports = router;
