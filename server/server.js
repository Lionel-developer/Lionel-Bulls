require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Hardcoded MongoDB URI and JWT secret key
const URI = "mongodb://localhost:27017/lionel-bulls";
const secretKey = "uk9NnCN8HZLVVUmc7V6utJxtKRMcZ5V4";  // Hardcoded JWT Secret Key

console.log("MONGO_URI:", URI);
console.log("JWT_SECRET:", secretKey);

// Routes
app.use('/api/auth', authRoutes);

// Middleware to protect routes with JWT
const protectRoute = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Extract token from Authorization header
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);  // Use hardcoded JWT secret
    req.user = decoded;  // Attach user info to the request object
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Example Protected Route
app.get('/api/dashboard', protectRoute, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard!',
    userId: req.user.id,  // Access user ID from the JWT
  });
});

// MongoDB Connection
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // Exit the process if MongoDB connection fails
  });
