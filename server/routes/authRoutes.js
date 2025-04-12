const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Hardcoded JWT secret key
const secretKey = "uk9NnCN8HZLVVUmc7V6utJxtKRMcZ5V4";

// Sign Up Route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Log incoming request for debugging
  console.log("Incoming SignUp request:", { email, password });

  if (!email || !password) {
    console.log("Missing fields: email or password");
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = new User({ email, password });

    // Log user creation
    console.log("Creating new user:", user);

    // Save the user to the database
    await user.save();

    // Generate JWT token using the hardcoded secret key
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

    // Log successful token creation
    console.log("JWT Token created for user:", user._id);

    // Send the token back in response
    res.status(201).json({ token });
  } catch (error) {
    // Log the specific error message
    console.error("SignUp Error:", error);

    // Return a 500 server error
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Missing fields: email or password");
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log("Invalid password for user:", email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token using the hardcoded secret key
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
    console.log("JWT Token created for user:", user._id);

    res.json({ token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
