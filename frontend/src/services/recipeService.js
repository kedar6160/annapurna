import Axios from "axios";

const API_URL = process.env.REACT_APP_API_URL|| 'http://localhost:5000/api';
console.log('API_URL:', API_URL);

// User Authentication
export const registerUser = async (userData) => {
    const response = await Axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await Axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
};

export const logoutUser = async () => {
    const response = await Axios.get(`${API_URL}/auth/logout`);
    return response.data;
};

// Recipes
export const getRecipes = async () => {
    const response = await Axios.get(`${API_URL}/recipes`);
    return response.data;
};

export const getRecipe = async (id) => {
    const response = await Axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
};

export const createRecipe = async (recipeData) => {
    const response = await Axios.post(`${API_URL}/recipes`, recipeData);
    return response.data;
};

export const updateRecipe = async (id, recipeData) => {
    const response = await Axios.put(`${API_URL}/recipes/${id}`, recipeData);
    return response.data;
};

export const deleteRecipe = async (id) => {
    const response = await Axios.delete(`${API_URL}/recipes/${id}`);
    return response.data;
};

// Ingredients
export const getIngredients = async () => {
    const response = await Axios.get(`${API_URL}/ingredients`);
    return response.data;
};

export const getIngredient = async (id) => {
    const response = await Axios.get(`${API_URL}/ingredients/${id}`);
    return response.data;
};

export const createIngredient = async (ingredientData) => {
    const response = await Axios.post(`${API_URL}/ingredients`, ingredientData);
    return response.data;
};

export const updateIngredient = async (id, ingredientData) => {
    const response = await Axios.put(`${API_URL}/ingredients/${id}`, ingredientData);
    return response.data;
};

export const deleteIngredient = async (id) => {
    const response = await Axios.delete(`${API_URL}/ingredients/${id}`);
    return response.data;
};

// Reports
export const getReports = async () => {
    const response = await Axios.get(`${API_URL}/reports`);
    return response.data;
};
