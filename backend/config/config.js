require("dotenv").config();

uri = process.env.ATLAS_URI;
jwtSecret = process.env.SECRET_KEY;
jwtExpiration = process.env.TIME;

module.exports = {
  mongoURI: uri,
  jwtSecret: jwtSecret,
  jwtExpiration: jwtExpiration
};