  const Report = require("../models/Report");

  exports.generateReport = async (req, res) => {
    try {
      // Fetch report data from the database
      const reports = await Report.find();

      // Calculate total number of reports
      const totalReports = reports.length;

      // Calculate average value of reports
      let sum = 0;
      for (let report of reports) {
        sum += report.value;
      }
      const averageValue = totalReports > 0 ? sum / totalReports : 0;

      // Prepare the report object
      const reportData = {
        totalReports,
        averageValue,
        reports,
      };

      // Send the report data as a response
      res.json({ reportData });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  };
