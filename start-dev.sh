#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Me-API Playground Development Servers${NC}"
echo ""

# Check if MongoDB is accessible
echo -e "${YELLOW}📡 Checking MongoDB connection...${NC}"
if curl -s --max-time 5 http://localhost:27017 >/dev/null 2>&1; then
    echo -e "${GREEN}✅ MongoDB is running${NC}"
else
    echo -e "${YELLOW}⚠️  MongoDB might not be running locally. Using remote MongoDB...${NC}"
fi

# Start backend server
echo -e "${YELLOW}🔧 Starting Backend Server (Port 3001)...${NC}"
cd backend
npm start &
BACKEND_PID=$!
echo -e "${GREEN}✅ Backend server started (PID: $BACKEND_PID)${NC}"

# Wait for backend to be ready
echo -e "${YELLOW}⏳ Waiting for backend to be ready...${NC}"
for i in {1..10}; do
    if curl -s http://localhost:3001/api/health >/dev/null 2>&1; then
        echo -e "${GREEN}✅ Backend is ready!${NC}"
        break
    fi
    sleep 1
    echo -n "."
done

# Start frontend server
echo -e "${YELLOW}🎨 Starting Frontend Server (Port 5173)...${NC}"
cd ../frontend
npm run dev &
FRONTEND_PID=$!
echo -e "${GREEN}✅ Frontend server started (PID: $FRONTEND_PID)${NC}"

echo ""
echo -e "${GREEN}🎉 Development servers are running!${NC}"
echo ""
echo -e "${BLUE}📊 Server URLs:${NC}"
echo -e "   Frontend: ${GREEN}http://localhost:5173${NC}"
echo -e "   Backend:  ${GREEN}http://localhost:3001${NC}"
echo -e "   API Health: ${GREEN}http://localhost:3001/api/health${NC}"
echo ""
echo -e "${YELLOW}📝 Available API Endpoints:${NC}"
echo -e "   GET  /api/profile      - Get user profile"
echo -e "   POST /api/profile      - Create user profile"
echo -e "   PUT  /api/profile      - Update user profile"
echo -e "   GET  /api/projects     - Get projects (with pagination)"
echo -e "   GET  /api/search       - Search skills and projects"
echo -e "   GET  /api/health       - Health check"
echo ""
echo -e "${RED}🛑 To stop servers: kill $BACKEND_PID $FRONTEND_PID${NC}"
echo -e "${BLUE}🔄 Or press Ctrl+C and run: killall node${NC}"

# Keep script running
wait
