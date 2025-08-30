# Me-API Playground 🚀

A modern, professional fullstack web application showcasing my portfolio through an interactive API-powered experience. Built with React, Node.js, Express, MongoDB, and styled with TailwindCSS.

![Project Banner](https://img.shields.io/badge/Status-Complete-brightgreen) ![Frontend](https://img.shields.io/badge/Frontend-React-blue) ![Backend](https://img.shields.io/badge/Backend-Node.js-green) ![Database](https://img.shields.io/badge/Database-MongoDB-green)

## ✨ Features

- **Dynamic Profile Display**: Real-time profile information with skills, education, work experience
- **Project Portfolio**: Interactive project cards with live demo and GitHub links
- **Search & Filter**: Advanced search functionality for projects and skills
- **Health Check**: API health monitoring with uptime tracking
- **Professional UI**: Clean, modern design with subtle animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **RESTful API**: Well-structured backend with proper error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **TailwindCSS v4** for styling
- **React Router** for navigation
- **Responsive Design** with mobile-first approach

### Backend
- **Node.js & Express.js** for server
- **MongoDB** with Mongoose ODM
- **Express Validator** for input validation
- **Morgan** for request logging
- **CORS** enabled for cross-origin requests

### Development Tools
- **ESLint** for code quality
- **Git** for version control
- **Environment variables** for configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sumitdkd/me-api-playground.git
   cd me-api-playground
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Add your MongoDB connection string to .env
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**
   ```bash
   # backend/.env
   MONGO_URI=your_mongodb_connection_string
   PORT=3001
   NODE_ENV=development
   ```

5. **Seed the Database**
   ```bash
   cd backend
   node seed.js
   ```

6. **Start the Application**
   ```bash
   # Start backend (from backend directory)
   npm start
   
   # Start frontend (from frontend directory)
   npm run dev
   ```

### Quick Start Script
Alternatively, use the provided start script:
```bash
chmod +x start-dev.sh
./start-dev.sh
```

## 📱 Usage

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

### API Endpoints

- `GET /api/profile` - Get profile information
- `PUT /api/profile` - Update profile
- `GET /api/projects` - Get projects with pagination
- `GET /api/search?q=query` - Search projects and skills
- `GET /api/health` - Health check endpoint

## 🎯 Key Features Implemented

### ✅ Professional Design
- Clean, modern UI with professional color scheme
- Removed excessive animations for business-appropriate look
- High contrast typography for excellent readability
- Simple, solid colors instead of gradients

### ✅ Real Data Integration
- **Personal Information**: Sumit Dhaker's actual profile data
- **Education**: B.Tech ECE from NIT Patna (2026)
- **Skills**: JavaScript, React, Node.js, MongoDB, etc.
- **Projects**: StudyNotion, JNV MAA Portal, Weather Dashboard
- **Work Experience**: Subject Matter Expert at Chegg

### ✅ Updated Project Links
- **StudyNotion**: [GitHub](https://github.com/Sumitdkd/StudyNotion_Frontend) | [Live Demo](https://study-notion-frontend-nine-lyart.vercel.app/)
- **JNV MAA Portal**: [GitHub](https://github.com/Sumitdkd/Alumni-Portal) | [Live Demo](https://jnv-maa.vercel.app)
- **Weather Dashboard**: [GitHub](https://github.com/Sumitdkd/WeatherApp) | [Live Demo](https://weather-agfyq10me-sumit-dhakers-projects.vercel.app/)

### ✅ Technical Improvements
- Fixed all JSX syntax errors
- Proper error handling and validation
- Professional logging system
- Health monitoring endpoint
- Responsive design optimizations

## 🏗️ Project Structure

```
me-api-playground/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # API controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   ├── seed.js          # Database seeding
│   └── server.js        # Express server
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── api.js       # API client
│   │   └── App.jsx      # Main app component
│   └── index.html       # HTML template
├── .gitignore
├── README.md
└── start-dev.sh         # Development start script
```

## 🔧 Development

### Available Scripts

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `node seed.js` - Seed database with sample data

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Highlights

- **Professional Appearance**: Business-ready UI with clean design
- **Real Portfolio Data**: Showcases actual projects and experience
- **Modern Tech Stack**: Latest React, Node.js, and MongoDB
- **API-Driven**: Full RESTful API with proper error handling
- **Responsive Design**: Works perfectly on all screen sizes
- **Health Monitoring**: Built-in API health check functionality

## 📧 Contact

**Sumit Dhaker**
- Email: sumit006162@gmail.com
- GitHub: [@Sumitdkd](https://github.com/Sumitdkd)
- LinkedIn: [sumit-dhaker](https://linkedin.com/in/sumit-dhaker)
- Portfolio: [sumitdhaker.vercel.app](https://sumitdhaker.vercel.app)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please give it a star!

# Me-API Playground - Full Stack Project

A complete full-stack application with Node.js/Express backend and React frontend for managing and displaying profile information, projects, and skills.

## Project Structure

```
me-api-playground-fullstack/
├── backend/                    # Node.js + Express + MongoDB backend
│   ├── config/db.js           # MongoDB connection
│   ├── controllers/profileController.js
│   ├── models/Profile.js      # Mongoose schema
│   ├── routes/profile.js      # API routes
│   ├── middleware/           # Error handling & validation
│   ├── utils/logger.js       # Custom logger
│   ├── server.js            # Entry point
│   ├── .env.example         # Environment variables template
│   ├── package.json         # Backend dependencies
│   └── schema.md           # Database schema documentation
├── frontend/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── api.js          # Axios configuration
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   └── tailwind.config.js  # Tailwind CSS config
└── README.md               # This file
```

## Features

### Backend API Endpoints
- `GET /api/health` - Health check with uptime
- `GET /api/profile` - Fetch profile data
- `POST /api/profile` - Create new profile
- `PUT /api/profile` - Update existing profile
- `GET /api/projects?skill=&page=&limit=` - Get projects with filtering and pagination
- `GET /api/search?q=` - Search skills and projects

### Frontend Features
- **Home Page**: Search functionality and paginated project list
- **Profile Page**: Display complete profile information
- **Responsive Design**: Clean Tailwind CSS styling
- **Real-time Search**: Connected to backend search endpoint
- **Skill Filtering**: Click skills to filter projects
- **Pagination**: Navigate through projects with Next/Previous

## Quick Start

### 1. Setup Backend
```bash
cd backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your MongoDB URI

# Start development server
npm run dev
```

### 2. Setup Frontend
```bash
cd frontend

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

### 3. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/meapi
PORT=5000
```

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Validation**: Express-validator
- **Logging**: Morgan + Custom logger
- **Security**: CORS enabled

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router Dom
- **HTTP Client**: Axios
- **State Management**: React useState/useEffect

## API Usage Examples

### Get Profile
```bash
curl http://localhost:5000/api/profile
```

### Search
```bash
curl "http://localhost:5000/api/search?q=react"
```

### Get Projects with Filtering
```bash
curl "http://localhost:5000/api/projects?skill=javascript&page=1&limit=5"
```

## Development Notes

- Backend runs on port 5000
- Frontend runs on port 5173 (Vite default)
- All API calls from frontend include proper error handling
- MongoDB connection includes retry logic and proper error handling
- Tailwind CSS configured for responsive design
- Search functionality works across skills and project data

## Next Steps

1. Add your MongoDB URI to backend/.env
2. Create sample profile data via POST /api/profile
3. Test all endpoints and frontend functionality
4. Customize styling and add more features as needed

Happy coding! 🚀
