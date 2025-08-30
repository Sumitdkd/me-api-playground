import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProjectList from '../components/ProjectList';

const Home = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [skillFilter, setSkillFilter] = useState('');

  const handleSearchResults = (results) => {
    setSearchResults(results);
    // Clear skill filter when searching
    if (results) {
      setSkillFilter('');
    }
  };

  const handleSkillClick = (skill) => {
    setSkillFilter(skill);
    setSearchResults(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden gradient-bg">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-8 sm:mb-12">
            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                <span className="block">
                  Welcome to
                </span>
                <span className="block mt-2 text-blue-400">
                  Me-API Playground 
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <div>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Discover my projects, explore my skills, and dive into my professional journey through this 
                <span className="text-blue-400 font-semibold">interactive API-powered experience</span>
              </p>
            </div>
            
            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
              <div className="px-6 py-3 bg-white/90 text-slate-700 rounded-lg text-sm font-medium shadow-sm border border-slate-200">
                Search Projects
              </div>
              <div className="px-6 py-3 bg-white/90 text-slate-700 rounded-lg text-sm font-medium shadow-sm border border-slate-200">
                Filter by Skills
              </div>
              <div className="px-6 py-3 bg-white/90 text-slate-700 rounded-lg text-sm font-medium shadow-sm border border-slate-200">
                View Profile
              </div>
            </div>
            
            {/* Call-to-Action */}
            <div>
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Search Bar */}
        <SearchBar onSearchResults={handleSearchResults} />

        {/* Active Filter Display */}
        {skillFilter && (
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
              <span className="text-slate-700 font-medium text-center sm:text-left">🎯 Filtering by skill:</span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                {skillFilter}
              </span>
              <button
                onClick={() => setSkillFilter('')}
                className="p-1 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors duration-200"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchResults && (
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Search Results for "{searchResults.query}" 
                <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-lg ml-2">
                  {searchResults.totalResults} results
                </span>
              </h2>
              
              {/* Skills Results */}
              {searchResults.data.skills.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                     <span className="text-green-700">Skills Found</span>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {searchResults.data.skills.map((skill, index) => (
                      <button
                        key={index}
                        onClick={() => handleSkillClick(skill)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 shadow-sm"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Results */}
              {searchResults.data.projects.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="text-blue-700">Projects Found</span>
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {searchResults.data.projects.map((project, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
                        <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                           {project.title}
                        </h4>
                        <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                        {project.skills && project.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.totalResults === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <div className="text-gray-500 text-lg">
                    No results found for "{searchResults.query}"
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    Try searching for different keywords
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* All Projects (when not searching) */}
        {!searchResults && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">
                {skillFilter ? ` Projects with "${skillFilter}"` : ' All Projects'}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <ProjectList skillFilter={skillFilter} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
