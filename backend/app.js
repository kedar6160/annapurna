const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");

app.use(express.json());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    UserCreateIndex: true
})
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.error(err));

const authRoutes = require("./routes/"); 
const recipeRoutes = require("./routes/");
const ingredientRoutes = require("./routes/");
const reportRoutes = require("./routes/");

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));