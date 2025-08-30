const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Profile = require('./models/Profile');
const logger = require('./utils/logger');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/me-api-playground');
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error('Database connection error:', error);
    process.exit(1);
  }
};

// ==== Your Real Data (Sumit Dhaker) ====
const sampleProfile = {
  name: "Sumit Dhaker",
  email: "sumit006162@gmail.com",
  education: [
    {
      degree: "B.Tech",
      branch: "Electronics and Communication Engineering",
      college: "National Institute of Technology Patna",
      year: 2026
    }
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "Git",
    "Docker",
    "AWS",
    "GraphQL"
  ],
  projects: [
    {
      title: "StudyNotion",
      description: "An ed-tech full-stack platform with courses, authentication, payments, and dashboards.",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      links: {
        github: "https://github.com/Sumitdkd/StudyNotion_Frontend",
        live: "https://study-notion-frontend-nine-lyart.vercel.app/"
      }
    },
    {
      title: "JNV Mandphia Alumni Portal (JNV MAA)",
      description: "An alumni portal for Jawahar Navodaya Vidyalaya Mandphia with authentication, member directory, and networking features.",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      links: {
        github: "https://github.com/Sumitdkd/Alumni-Portal",
        live: "https://jnv-maa.vercel.app"
      }
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using Weather APIs.",
      skills: ["JavaScript", "Weather API", "Tailwind CSS"],
      links: {
        github: "https://github.com/Sumitdkd/WeatherApp",
        live: "https://weather-agfyq10me-sumit-dhakers-projects.vercel.app/"
      }
    }
  ],
  work: [
    {
      role: "Subject Matter Expert",
      company: "Chegg",
      duration: "2023 - Present"
    }
  ],
  links: {
    github: "https://github.com/sumitdhaker",
    linkedin: "https://linkedin.com/in/sumit-dhaker",
    portfolio: "https://sumitdhaker.vercel.app"
  }
};

// Seed function
const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Profile.deleteMany({});
    logger.info('Cleared existing profile data');

    // Create sample profile
    const profile = await Profile.create(sampleProfile);
    logger.info('Sample profile created successfully', { id: profile._id });

    console.log(' Database seeded successfully!');
    console.log(` Profile: ${profile.name}`);
    console.log(` Skills: ${profile.skills.length}`);
    console.log(` Projects: ${profile.projects.length}`);
    console.log(` Work Experience: ${profile.work.length}`);

    process.exit(0);
  } catch (error) {
    logger.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase, sampleProfile };
