const Student = require("../models/student");
const Teacher = require("../models/teacher");

Student.find({}).remove(() => {
  Student.create(
    {
      firstName: "Tamika",
      lastName: "Robinson",
      email: "tamikar1242@gmail.com",
      location: "Omaha, NE",
      idiom: "Violin",
      language: "English",
      other: "Allergic to peanuts",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    },
    {
      firstName: "Aleksandra",
      lastName: "Dubrov",
      email: "adubrov1248@gmail.com",
      location: "Peoria, IL",
      idiom: "Flute",
      language: "Russian",
      other: "",
      myTeachers: [],
      online: true,
      student: true,
      teacher: false,
    }
  );
});

Teacher.find({}).remove(() => {
  Teacher.create(
    {
      firstName: "Ebi",
      lastName: "Adebayo",
      email: "e.adebayo@yahoo.com",
      location: "New York, NY",
      idiom1: "Guitar",
      idiom2: "Banjo",
      idiom3: "Ukelele",
      rate: 50,
      language: "English",
      teachingStyle: "Suzuki",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    },
    {
      firstName: "Sarah",
      lastName: "Ferguson",
      email: "s.furgiefurg@yahoo.com",
      location: "Chicago, IL",
      idiom1: "Clarinet",
      idiom2: "Saxophone",
      idiom3: "",
      rate: 48,
      language: "English",
      teachingStyle: "Authoritarian",
      online: true,
      studentRoster: [],
      student: false,
      teacher: true,
    }
  );
});

