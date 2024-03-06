module.exports = (req, res, next) => {
    // Example authentication logic
    // Check if user is authenticated
  
    if (a/* user is authenticated */) {
      next(); // Proceed to next middleware or route handler
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };