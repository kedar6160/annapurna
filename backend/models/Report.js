const mongoose = require("mongoose");

// Example Report schema
const ReportSchema = new mongoose.Schema({
  // Define report fields as needed
});

module.exports = mongoose.model("Report", ReportSchema);