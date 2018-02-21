
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
  name: String,
  age: Number,
  reason: String,
  date: Date,
  description: String
});

var Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;

