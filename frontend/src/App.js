import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Recipes from './pages/Recipes';
import RecipieDetail from './components/RecipieDetail';
import Ingredients from './components/Ingredients';
import IngredientDetails from './components/IngredientDetails';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';

function App() {
  return (
  <Router>
    <div>
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/logout" element={<Logout />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipies/:id" element={<RecipieDetail />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
