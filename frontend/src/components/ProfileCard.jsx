const ProfileCard = ({ profile }) => {
  if (!profile) {
    return (
      <div className="relative group fade-in">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 rounded-2xl blur opacity-30"></div>
        <div className="relative glass-morphism rounded-xl shadow-xl p-6 sm:p-8 border border-white/30">
          <div className="text-center">
            <div className="text-gray-600 text-base sm:text-lg font-medium gradient-text">No profile data available</div>
            <div className="text-gray-500 text-sm mt-2">Create a profile to get started</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div className="w-28 h-28 bg-slate-700 rounded-full flex items-center justify-center text-4xl text-white font-bold mx-auto mb-4 shadow-sm">
            <span>{profile.name?.charAt(0)?.toUpperCase()}</span>
          </div>
       
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          {profile.name}
        </h2>

        <div className="flex items-center justify-center gap-2 text-slate-600">
       
          <span className="font-medium break-all">{profile.email}</span>
        </div>
      </div>

      {/* Skills */}
      {profile.skills?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
           
            <span>Skills & Expertise</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {profile.education?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span>Education</span>
          </h3>
          <div className="space-y-4">
            {profile.education.map((edu, index) => (
              <div
                key={index}
                className="p-5 bg-white rounded-lg border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <p className="font-bold text-slate-800 text-lg">
                  {edu.degree} in {edu.branch}
                </p>
                <p className="text-indigo-600 font-medium flex items-center gap-2">
                   {edu.college}
                </p>
                <p className="text-sm text-slate-600 flex items-center gap-2 mt-2">
                   <span className="font-medium">Year: {edu.year}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Work */}
      {profile.work?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span>Work Experience</span>
          </h3>
          <div className="space-y-4">
            {profile.work.map((work, index) => (
              <div
                key={index}
                className="p-5 bg-white rounded-lg border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <p className="font-bold text-slate-800 text-lg">{work.role}</p>
                <p className="text-orange-600 font-medium flex items-center gap-2">
                     {work.company}
                </p>
                <p className="text-sm text-slate-600 flex items-center gap-2 mt-2">
                 <span className="font-medium">{work.duration}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      {profile.links && (
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 justify-center">
            
            <span>Connect With Me</span>
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors duration-200 shadow-sm text-sm font-medium"
              >
                GitHub
              </a>
            )}
            {profile.links.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm text-sm font-medium"
              >
                LinkedIn
              </a>
            )}
            {profile.links.portfolio && (
              <a
                href={profile.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm text-sm font-medium"
              >
                 Portfolio
              </a>
            )}
          </div>
        </div>
      )}

 
    </div>
  );
};

export default ProfileCard;
