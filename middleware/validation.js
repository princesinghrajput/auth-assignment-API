const { body } = require('express-validator');

// Validation rules for user registration
const validateRegister = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Must be at least 2 characters'),

  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 characters'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address'),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone is required'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Must be at least 6 characters'),

  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    })
];

// Validation rules for user login
const validateLogin = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 characters'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Must be at least 6 characters')
];

module.exports = {
  validateRegister,
  validateLogin
};
