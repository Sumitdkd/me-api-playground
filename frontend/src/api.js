import axios from 'axios';

// Create axios instance with backend base URL
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('Response error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);

// API methods
export const profileAPI = {
  // Get profile
  getProfile: () => api.get('/profile'),
  
  // Create profile
  createProfile: (profileData) => api.post('/profile', profileData),
  
  // Update profile
  updateProfile: (profileData) => api.put('/profile', profileData),
  
  // Get projects with optional filtering and pagination
  getProjects: (params = {}) => {
    const { skill, page = 1, limit = 10 } = params;
    const queryParams = new URLSearchParams();
    
    if (skill) queryParams.append('skill', skill);
    queryParams.append('page', page);
    queryParams.append('limit', limit);
    
    return api.get(`/projects?${queryParams.toString()}`);
  },
  
  // Search skills and projects
  search: (query) => api.get(`/search?q=${encodeURIComponent(query)}`),
  
  // Health check
  healthCheck: () => api.get('/health')
};

export default api;
