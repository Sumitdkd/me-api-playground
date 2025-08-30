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
