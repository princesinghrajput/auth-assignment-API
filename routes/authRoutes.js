const express = require('express');
const router = express.Router();

// Import controllers and middleware
const {
  register,
  login,
  getProfile
} = require('../controllers/authController');

const {
  validateRegister,
  validateLogin
} = require('../middleware/validation');

const {
  authenticateToken
} = require('../middleware/auth');

// Public routes
/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 * @body    { name, username, email, phone, password, confirmPassword }
 */
router.post('/register', validateRegister, register);

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 * @body    { username, password }
 */
router.post('/login', validateLogin, login);

// Protected routes
/**
 * @route   GET /api/auth/profile
 * @desc    Get user profile
 * @access  Private
 * @headers Authorization: Bearer <token>
 */
router.get('/profile', authenticateToken, getProfile);



module.exports = router;
