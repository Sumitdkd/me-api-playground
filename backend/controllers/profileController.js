const Profile = require('../models/Profile');
const logger = require('../utils/logger');

// @desc    Get profile
// @route   GET /api/profile
// @access  Public
const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne();
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
    }

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    logger.error('Error getting profile:', error);
    next(error);
  }
};

// @desc    Create profile
// @route   POST /api/profile
// @access  Public
const createProfile = async (req, res, next) => {
  try {
    // Check if profile already exists
    const existingProfile = await Profile.findOne();
    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: 'Profile already exists. Use PUT to update.'
      });
    }

    const profile = await Profile.create(req.body);
    
    logger.info('Profile created successfully', { id: profile._id });
    
    res.status(201).json({
      success: true,
      data: profile
    });
  } catch (error) {
    logger.error('Error creating profile:', error);
    next(error);
  }
};

// @desc    Update profile
// @route   PUT /api/profile
// @access  Public
const updateProfile = async (req, res, next) => {
  try {
    let profile = await Profile.findOne();
    
    if (!profile) {
      // Create new profile if none exists
      profile = await Profile.create(req.body);
      logger.info('Profile created via update', { id: profile._id });
    } else {
      profile = await Profile.findByIdAndUpdate(
        profile._id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );
      logger.info('Profile updated successfully', { id: profile._id });
    }

    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    logger.error('Error updating profile:', error);
    next(error);
  }
};

// @desc    Get projects with filtering and pagination
// @route   GET /api/projects?skill=&page=&limit=
// @access  Public
const getProjects = async (req, res, next) => {
  try {
    const { skill, page = 1, limit = 10 } = req.query;
    
    const profile = await Profile.findOne();
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
    }

    let projects = profile.projects;

    // Filter by skill if provided
    if (skill) {
      projects = projects.filter(project => 
        project.skills.some(projectSkill => 
          projectSkill.toLowerCase().includes(skill.toLowerCase())
        )
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedProjects = projects.slice(startIndex, endIndex);

    const pagination = {
      currentPage: parseInt(page),
      totalPages: Math.ceil(projects.length / limit),
      totalProjects: projects.length,
      hasNextPage: endIndex < projects.length,
      hasPrevPage: startIndex > 0
    };

    res.status(200).json({
      success: true,
      data: paginatedProjects,
      pagination
    });
  } catch (error) {
    logger.error('Error getting projects:', error);
    next(error);
  }
};

// @desc    Search skills and projects
// @route   GET /api/search?q=
// @access  Public
const searchProfile = async (req, res, next) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const profile = await Profile.findOne();
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
    }

    const searchTerm = q.toLowerCase();
    const results = {
      skills: [],
      projects: []
    };

    // Search in skills
    results.skills = profile.skills.filter(skill =>
      skill.toLowerCase().includes(searchTerm)
    );

    // Search in projects
    results.projects = profile.projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.skills.some(skill => skill.toLowerCase().includes(searchTerm))
    );

    res.status(200).json({
      success: true,
      query: q,
      data: results,
      totalResults: results.skills.length + results.projects.length
    });
  } catch (error) {
    logger.error('Error searching profile:', error);
    next(error);
  }
};

// @desc    Health check
// @route   GET /api/health
// @access  Public
const healthCheck = (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Me-API Playground'
  });
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  getProjects,
  searchProfile,
  healthCheck
};
