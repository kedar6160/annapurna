const mongoose = require("mongoose");

// Example Recipe schema
const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient"
    }
  ],
  instructions: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Recipe", RecipeSchema);