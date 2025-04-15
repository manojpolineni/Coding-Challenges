import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
      const location = useLocation();
  return (
    <div className="flex justify-center items-center bg-gray-200 w-full h-16 text-gray-800">
      <nav className="ml-10">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className={`hover:text-gray-400 ${location.pathname === '/form' ? 'text-yellow-400 font-semibold' : ''}`}>
              Form
            </Link>
          </li>
          <li>
            <Link to="/otp" className={`hover:text-gray-400 ${location.pathname === '/otp' ? 'text-yellow-400 font-semibold' : ''}`}>
              OTP
            </Link>
          </li>
          <li>
            <Link to="/autocomplete" className={`hover:text-gray-400 ${location.pathname === '/autocomplete' ? 'text-yellow-400 font-semibold' : ''}`}>
              AutoComplete
            </Link>
          </li>
          <li>
            <Link to="/pagination" className={`hover:text-gray-400 ${location.pathname === '/pagination' ? 'text-yellow-400 font-semibold' : ''}`}>
              Pagination
            </Link>
          </li>
          <li>
            <Link to="/timer" className={`hover:text-gray-400 ${location.pathname === '/timer' ? 'text-yellow-400 font-semibold' : ''}`}>
              Timer
            </Link>
          </li>
          <li>
            <Link to="/virtualize" className={`hover:text-gray-400 ${location.pathname === '/virtualize' ? 'text-yellow-600 font-semibold' : ''}`}>
              Virtualization
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
