import { useState, useEffect } from 'react';
import { profileAPI } from '../api';

const ProjectList = ({ skillFilter = '' }) => {
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const limit = 6; // Projects per page

  useEffect(() => {
    fetchProjects();
  }, [currentPage, skillFilter]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await profileAPI.getProjects({
        skill: skillFilter,
        page: currentPage,
        limit
      });
      
      setProjects(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err.error || 'Failed to fetch projects');
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (pagination?.hasNextPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination?.hasPrevPage) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Reset to page 1 when skill filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [skillFilter]);

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 animate-spin">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <div className="text-slate-700 text-lg font-medium px-4">Loading projects...</div>
        <div className="text-slate-500 text-sm mt-2 px-4">Please wait while we fetch the data</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 px-4">
       
        <div className="text-red-600 text-lg font-medium">{error}</div>
        <div className="text-red-500 text-sm mt-2">Please try again later</div>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="text-6xl mb-4">{skillFilter ? '🎯' : '📂'}</div>
        <div className="text-slate-700 text-lg font-medium mb-2">
          {skillFilter ? `No projects found with skill "${skillFilter}"` : 'No projects available'}
        </div>
        <div className="text-slate-500 text-sm">
          {skillFilter ? 'Try searching for a different skill' : 'Projects will appear here when added to your profile'}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
            {/* Card Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                 {project.title}
              </h3>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Skills */}
            {project.skills && project.skills.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-600 mb-3 flex items-center gap-2">
                 
                  <span>Technologies</span>
                </h4>
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
              </div>
            )}
            
            {/* Project Links */}
            {project.links && (
              <div className="flex gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-lg text-center text-sm font-medium hover:bg-slate-900 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
                  >
                     GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
                  >
                     Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
          <button
            onClick={handlePrevPage}
            disabled={!pagination.hasPrevPage}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
          >
            ← <span className="hidden sm:inline">Previous</span>
          </button>
          
          <div className="text-center order-first sm:order-none">
            <div className="px-4 py-2 bg-slate-100 text-slate-800 rounded-lg font-medium border border-slate-200">
              Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div className="text-slate-500 text-sm mt-1">
              {pagination.totalProjects} total projects
            </div>
          </div>
          
          <button
            onClick={handleNextPage}
            disabled={!pagination.hasNextPage}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
          >
            <span className="hidden sm:inline">Next</span> →
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
