const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userName: String,
  userId: String,
  gender: String,
});

module.exports = mongoose.model("vivas", schema);
