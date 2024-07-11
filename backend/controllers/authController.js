const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User({
      username,
      password,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    user.password = await bcrypt.hash(password, salt);
    console.log("user.password:",user.password);
    
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
if(!isMatch) {
return res.status(401).json({ message: "Invalid password" });

  }
  const token = jwt.sign(
    { userId: user._id },
    config.jwtSecret,
    { expiresIn: config.jwtExpiration }
);

// Return token to client
res.status(200).json({ token });
 }catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
  // Implementation for login endpoint
};
exports.logout = async (req, res) => {

  try{
   res.clearCookie("token");
   res.status(200).json({ message: "Logout successful" });

  }
  catch (error) {
console.error(error.message);
res.status(500).send("Server Error");
  }
  // Implementation for logout endpoint
};
