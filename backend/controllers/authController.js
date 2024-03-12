const bcrypt =require("bcryptjs");
const jwt =require("jsonwebtoken");
const config =require("../config/config");
const User =require("../models/User");
require("dotenv").config();

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
      // console.log(user);
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
  exports.login = async (req, res) => {
    
    const {username, password} =req.body;
    try{
      let user = await User.findOne({username});
      if (!user){
        return res.status(400).json({message: "User not found"});
      }
      const isMatch = await bcrypt.compare(password,user.password);
      if(!isMatch){
        return res.status(400).json({message: "Invalid Credentials"});
      }
      const payload =  {
        user:{
          _id: user._id,
          username  : user.username,
        }
      };
      jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: config.jwtExpiration },
        (err, token) => {
            if (err) throw err;
            res.json({ token }); // Send the token in the response
        }
    );


    }catch(err){
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  };
  