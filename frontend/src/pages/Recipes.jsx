import React, { useState, useEffect } from 'react';
import { getRecipes } from '../services/recipeService.js'; // Import the getRecipes function

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = await getRecipes(); // Use the getRecipes function
        setRecipes(data);
      } catch (error) {
        console.error('There was an error fetching the recipes!', error);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
