import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-green-800 p-4 flex justify-between items-center">
      {/* Logo Section */}
      <Link to="/" className="flex items-center space-x-2">
        <img 
          src="https://via.placeholder.com/40" 
          alt="Logo" 
          className="rounded-full" 
        />
        <div className="text-white font-bold text-lg">
          MyCompany
        </div>
      </Link>

      {/* Navigation Section */}
      <div className="space-x-6 text-white">
        <Link to="/" className="hover:text-blue-500"></Link>
        <Link to="/missions" className="hover:text-blue-500">Missions</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>

      </div>
    </div>
  );
}

export default Header;