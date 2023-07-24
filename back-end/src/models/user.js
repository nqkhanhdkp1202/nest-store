const mongoose = require("mongoose");
const { schemaOption } = require("./modelOption");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    require: true,
    unique: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
