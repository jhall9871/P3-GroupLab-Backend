const mongoose = require("mongoose");
let MONGODB_URI = '';

if (process.env.NODE_ENV === "production") {
  MONGODB_URI = process.env.DB_URL;
} else {
  MONGODB_URI = "mongodb://localhost/forte-db";
}

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("connection established to mongod")
);

// mongoose.Promise = Promise;
module.exports = mongoose;
