# Deployment Guide

## Current Status
- ✅ **Frontend Deployed**: https://me-api-playground-1ste.vercel.app/
- ⏳ **Backend**: Needs to be deployed

## Deploy Backend to Vercel

### Step 1: Deploy Backend
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import this GitHub repository: `https://github.com/Sumitdkd/me-api-playground`
4. **Important**: Set the Root Directory to `backend`
5. Add Environment Variables in Vercel:
   ```
   MONGO_URI=mongodb+srv://ivar01010011_db_user:nXSy0EMekSzNLgTN@cluster0.vdfvmvt.mongodb.net/me-api
   PORT=3001
   NODE_ENV=production
   ```
6. Deploy

### Step 2: Update Frontend Environment Variable
Once your backend is deployed (let's say it gets URL: `https://your-backend-abc123.vercel.app`):

1. Go to your frontend Vercel project settings
2. Add/Update Environment Variable:
   ```
   VITE_API_BASE_URL=https://your-backend-abc123.vercel.app/api
   ```
3. Redeploy frontend

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

### Backend (.env in Vercel)
```env
MONGO_URI=mongodb+srv://ivar01010011_db_user:nXSy0EMekSzNLgTN@cluster0.vdfvmvt.mongodb.net/me-api
PORT=3001
NODE_ENV=production
```

### Frontend (.env in Vercel)
```env
VITE_API_BASE_URL=https://your-backend-url.vercel.app/api
```

## Testing Deployment

### Backend Health Check
```bash
curl https://your-backend-url.vercel.app/api/health
```

### Frontend API Connection
Open browser dev tools on your frontend and check for API calls.

## Current Configuration
- Frontend URL: https://me-api-playground-1ste.vercel.app/
- Backend URL: To be deployed
- GitHub Repo: https://github.com/Sumitdkd/me-api-playground
