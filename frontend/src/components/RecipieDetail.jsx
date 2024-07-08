import React, { useState, useEffect } from 'react';
import { getRecipe } from '../services/recipeService.js'; // Ensure this path is correct
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const data = await getRecipe(id);
        setRecipe(data);
      } catch (error) {
        console.error('There was an error fetching the recipe!', error);
      }
    }

    fetchRecipe();
  }, [id]);

  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <p>{recipe.instructions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RecipeDetail;
