import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className="text-xl md:text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
            >
              <span className="text-2xl">✨</span>
              <span className="hidden sm:inline">Me-API Playground</span>
              <span className="sm:hidden">Me-API</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/"
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className="flex items-center gap-2">
                
                <span>Home</span>
              </span>
            </Link>
            
            <Link
              to="/profile"
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive('/profile') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className="flex items-center gap-2">
                
                <span>Profile</span>
              </span>
            </Link>
            
            {/* Health Check Link */}
            <a
              href="http://localhost:3001/api/health"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors duration-200 text-xs text-slate-600 font-medium"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Health Check</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 bg-slate-50 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200 border border-slate-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-200 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-200 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-200 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-200 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pt-4 space-y-3">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block w-full text-center px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">🏠</span>
                <span>Home</span>
              </span>
            </Link>
            
            <Link
              to="/profile"
              onClick={closeMobileMenu}
              className={`block w-full text-center px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive('/profile') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">👤</span>
                <span>Profile</span>
              </span>
            </Link>
            
            {/* Mobile Health Check Link */}
            <a
              href="http://localhost:3001/api/health"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors duration-200 text-xs text-slate-600 font-medium"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Health Check</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
