const bcrypt =require("bcryptjs");
const jwt =require("jsonwebtoken");
const config =require("../config/config");
const User =require("../models/User");

  exports.register = async (req, res) => {
    const {username, password, role} =req.body;
    try{
      let user = await User.findOne({username});
      if (user){
        return res.status(400).json({message: "User already exists"});
      }
      user = new User({
        username,
        password,
        role
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password,salt);

      await user.save();
      res.status(201).json({message: "User registered successfully"});
    }
    catch(err){
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  };
  exports.login = (req, res) => {
    // Implementation for login endpoint
  };
  exports.logout = (req, res) => {
    // Implementation for logout endpoint
  };