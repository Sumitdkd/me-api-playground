const express = require('express');
const { body, query } = require('express-validator');
const {
  getProfile,
  createProfile,
  updateProfile,
  getProjects,
  searchProfile,
  healthCheck
} = require('../controllers/profileController');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

// Health check route
router.get('/health', healthCheck);

// Profile validation rules
const profileValidationRules = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('education.*.degree')
    .optional()
    .notEmpty()
    .withMessage('Degree is required for education entries'),
  
  body('education.*.branch')
    .optional()
    .notEmpty()
    .withMessage('Branch is required for education entries'),
  
  body('education.*.college')
    .optional()
    .notEmpty()
    .withMessage('College is required for education entries'),
  
  body('education.*.year')
    .optional()
    .isNumeric()
    .withMessage('Year must be a number'),
  
  body('skills.*')
    .optional()
    .isString()
    .withMessage('Skills must be strings'),
  
  body('projects.*.title')
    .optional()
    .notEmpty()
    .withMessage('Project title is required'),
  
  body('projects.*.description')
    .optional()
    .notEmpty()
    .withMessage('Project description is required'),
  
  body('work.*.role')
    .optional()
    .notEmpty()
    .withMessage('Role is required for work entries'),
  
  body('work.*.company')
    .optional()
    .notEmpty()
    .withMessage('Company is required for work entries'),
  
  body('work.*.duration')
    .optional()
    .notEmpty()
    .withMessage('Duration is required for work entries')
];

// Query validation rules
const projectsQueryValidation = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  query('skill')
    .optional()
    .isString()
    .withMessage('Skill filter must be a string')
];

const searchQueryValidation = [
  query('q')
    .notEmpty()
    .withMessage('Search query is required')
    .isLength({ min: 1, max: 100 })
    .withMessage('Search query must be between 1 and 100 characters')
];

// Routes
router.get('/profile', getProfile);
router.post('/profile', profileValidationRules, validateRequest, createProfile);
router.put('/profile', profileValidationRules, validateRequest, updateProfile);
router.get('/projects', projectsQueryValidation, validateRequest, getProjects);
router.get('/search', searchQueryValidation, validateRequest, searchProfile);

module.exports = router;
