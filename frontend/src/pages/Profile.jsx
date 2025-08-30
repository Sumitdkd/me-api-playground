import { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import UpdateProfile from '../components/UpdateProfile';
import { profileAPI } from '../api';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await profileAPI.getProfile();
      setProfile(response.data);
    } catch (err) {
      setError(err.error || 'Failed to fetch profile');
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchProfile();
  };

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    setShowUpdateForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center fade-in">
          <div className="relative">
            <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-spin">
              <svg className="w-10 sm:w-12 h-10 sm:h-12 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
          <div className="text-white/90 text-lg sm:text-xl font-bold mb-2">Loading your amazing profile...</div>
          <div className="text-white/70 text-sm">Please wait while we fetch your information</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
                 My Profile
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 px-4 sm:px-0">
                Discover my <span className="text-blue-400 font-semibold">professional journey</span> and <span className="text-blue-400 font-semibold">expertise</span>
              </p>
            </div>
            
            {/* Refresh Button */}
            <div>
              <button
                onClick={handleRefresh}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center gap-2 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error ? (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-2xl blur opacity-40"></div>
            <div className="relative bg-red-50/90 backdrop-blur-sm border-2 border-red-300 rounded-xl p-6 sm:p-8 text-center shadow-xl">
              <div className="text-4xl sm:text-6xl mb-4">❌</div>
              <div className="text-red-600 text-lg sm:text-xl font-bold mb-4">{error}</div>
              <button
                onClick={handleRefresh}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                 Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <ProfileCard profile={profile} />
            
            {/* Update Profile Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                 
                  Profile Settings
                </h2>
                <button
                  onClick={() => setShowUpdateForm(!showUpdateForm)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-sm flex items-center gap-2"
                >
                 
                  {showUpdateForm ? 'View Profile' : 'Edit Profile'}
                </button>
              </div>
              
              {showUpdateForm && (
                <UpdateProfile 
                  profile={profile} 
                  onUpdate={handleProfileUpdate}
                />
              )}
            </div>
          </div>
        )}

      
      </div>
    </div>
  );
};

export default Profile;
