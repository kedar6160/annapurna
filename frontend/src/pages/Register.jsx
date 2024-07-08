import React, { useState } from 'react';
import {registerUser}  from '../services/recipeService.js';  // Import the registerUser function

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: ''
  });

  const { username, password, role } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await registerUser(formData); // Use the registerUser function
      console.log(response);
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={onChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" name="role" value={role} onChange={onChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
