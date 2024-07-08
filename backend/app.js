const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
mongoose.connect(config.mongoURI, {
    useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.error(err));

const authRoutes = require("./routes/authRoutes"); 
const recipeRoutes = require("./routes/recipeRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const reportRoutes = require("./routes/reportRoutes");
   
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/reports", reportRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));