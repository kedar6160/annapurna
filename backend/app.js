const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");

app.use(express.json());

mongoose.connect(config.mongoURI, {
    useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.error(err));

const authRoutes = require("./routes/authRoutes"); 
const recipeRoutes = require("./routes/recipeRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const reportRoutes = require("./routes/reportRoutes");

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));