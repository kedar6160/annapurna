const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

// Report routes
router.get("/", reportController.generateReport);

module.exports = router;