# Deployment Guide

## Current Status
- ✅ **Frontend Deployed**: https://me-api-playground-1ste.vercel.app/
- ✅ **Backend Deployed**: https://me-api-playground-8hiu.onrender.com
- 🔄 **Connection**: Ready to connect

## ✅ Backend Already Deployed on Render

Your backend is successfully deployed at: **https://me-api-playground-8hiu.onrender.com**

### Update Frontend to Connect to Backend

1. Go to your Vercel frontend project: `me-api-playground-1ste`
2. Go to Settings → Environment Variables  
3. Add/Update Environment Variable:
   ```
   Name: VITE_API_BASE_URL
   Value: https://me-api-playground-8hiu.onrender.com/api
   ```
4. Redeploy your frontend

### Alternative: Quick Test Locally
```bash
cd frontend
# Temporarily update .env for testing
echo "VITE_API_BASE_URL=https://me-api-playground-8hiu.onrender.com/api" > .env
npm run dev
```

### Step 3: Test Connection
Visit your frontend and check:
- Profile page loads data
- Projects are displayed  
- Search functionality works
- Health check in navbar works

## Alternative: Use Vercel CLI

### Backend Deployment
```bash
cd backend
npx vercel --prod
# Follow prompts, set root directory to backend
```

### Frontend Environment Update
```bash
cd frontend  
# Set environment variable in Vercel dashboard
# Then redeploy
npx vercel --prod
```

## Environment Variables Summary

### Backend (Deployed on Render)
```env
✅ Already deployed at: https://me-api-playground-8hiu.onrender.com
```

### Frontend (Environment Variable for Vercel)
```env
VITE_API_BASE_URL=https://me-api-playground-8hiu.onrender.com/api
```

## Testing Deployment

### Backend Health Check
```bash
curl https://me-api-playground-8hiu.onrender.com/api/health
```

**Expected Response:**
```json
{
  "status": "ok", 
  "uptime": 343.478202798,
  "timestamp": "2025-08-30T19:35:53.874Z",
  "service": "Me-API Playground"
}
```

### Frontend API Connection
Open browser dev tools on your frontend and check for API calls.

## Current Configuration
- ✅ Frontend URL: https://me-api-playground-1ste.vercel.app/
- ✅ Backend URL: https://me-api-playground-8hiu.onrender.com
- ✅ GitHub Repo: https://github.com/Sumitdkd/me-api-playground
- 🔄 **Next**: Connect frontend to backend via environment variable
