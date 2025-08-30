const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  education: [{
    degree: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    college: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  }],
  skills: [{
    type: String,
    trim: true
  }],
  projects: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    skills: [{
      type: String,
      trim: true
    }],
    links: {
      github: {
        type: String,
        trim: true
      },
      live: {
        type: String,
        trim: true
      }
    }
  }],
  work: [{
    role: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type: String,
      required: true,
      trim: true
    },
    duration: {
      type: String,
      required: true,
      trim: true
    }
  }],
  links: {
    github: {
      type: String,
      trim: true
    },
    linkedin: {
      type: String,
      trim: true
    },
    portfolio: {
      type: String,
      trim: true
    }
  }
}, {
  timestamps: true
});

// Index for search functionality
profileSchema.index({ 
  name: 'text', 
  'skills': 'text', 
  'projects.title': 'text', 
  'projects.description': 'text',
  'projects.skills': 'text'
});

module.exports = mongoose.model('Profile', profileSchema);
