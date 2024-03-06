const mongoose = require("mongoose");

// Example Ingredient schema
const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Ingredient", IngredientSchema);