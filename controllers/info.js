const express = require('express');
const router = express.Router();

// Require the student and teacher models.
const Student = require('../models/student');
const Teacher = require('../models/teacher');

// List all students
router.get('/students/', (req, res) => {
	Student.find({}, (err, students) => {
		if (err) console.log(err);
		else res.send(students);
	});
});

// List all teachers
router.get('/teachers/', (req, res) => {
	Teacher.find({}, (err, teachers) => {
		if (err) console.log(err);
		else res.send(teachers);
	});
});

// Get student by last name
router.get('/students/:lastname', (req, res) => {
	Student.find({ lastName: req.params.lastname }, (err, student) => {
		if (err) console.log(err);
		else res.send(student);
	});
});

// Get teacher by last name
router.get('/teachers/:lastname', (req, res) => {
	Teacher.find({ lastName: req.params.lastname }, (err, teacher) => {
		if (err) console.log(err);
		else res.send(teacher);
	});
});


// Create a teacher
router.post('/teachers/', (req, res) => {
	Teacher.create(req.body, (err, teacher) => {
		if (err) console.log(err);
		else res.send(teacher);
	});
});

// Create a student
router.post('/students/', (req, res) => {
	Student.create(req.body, (err, student) => {
		if (err) console.log(err);
		else res.send(student);
	});
});

// Update a teacher by id
router.put('/teachers/:id', (req, res) => {
	Teacher.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updated) => {
		if (err) console.log(err);
		else res.send(updated);
	});
});

// Update a student by id
router.put('/students/:id', (req, res) => {
	Student.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updated) => {
		if (err) console.log(err);
		else res.send(updated);
	});
});

// Delete a student by id
router.delete('/students/:id', (req, res) => {
	Student.deleteOne({ _id: req.params.id }, (err, deleted) => {
		if (err) console.log(err);
		else res.send(deleted);
	});
});

// Delete a teacher by id
router.delete('/teachers/:id', (req, res) => {
	Teacher.deleteOne({ _id: req.params.id }, (err, deleted) => {
		if (err) console.log(err);
		else res.send(deleted);
	});
});

module.exports = router;
