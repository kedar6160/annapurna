const Ingredient = require("../models/Ingredient"); 

exports.getAllIngredients = async (req, res) => {
  try {
    // Fetch all ingredients from the database
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.getIngredientById = async (req, res) => {
  try {
    // Find the ingredient by ID in the database
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.json(ingredient);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.createIngredient = async (req, res) => {
  try {
    // Extract data from the request body
    const { name, quantity, unit } = req.body;
    
    // Create a new ingredient instance
    const newIngredient = new Ingredient({
      name,
      quantity,
      unit
    });
    
    // Save the new ingredient to the database
    await newIngredient.save();
    
    res.status(201).json({ message: "Ingredient created successfully", ingredient: newIngredient });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.updateIngredient = async (req, res) => {
  try {
    // Extract data from the request body
    const { name, quantity, unit } = req.body;
    
    // Find the ingredient by ID in the database
    let ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    
    // Update the ingredient fields
    ingredient.name = name;
    ingredient.quantity = quantity;
    ingredient.unit = unit;
    
    // Save the updated ingredient to the database
    await ingredient.save();
    
    res.json({ message: "Ingredient updated successfully", ingredient });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.deleteIngredient = async (req, res) => {
  try {
    // Find the ingredient by ID in the database and delete it
    await Ingredient.findByIdAndDelete(req.params.id);
    
    res.json({ message: "Ingredient deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
