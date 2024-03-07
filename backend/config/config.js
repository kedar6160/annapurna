require("dotenv").config();
uri = process.env.ATLAS_URI;
module.exports = {
  mongoURI: uri
};