import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center bg-gray-600 w-full h-16 text-gray-800">
      <nav className="ml-10">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Form
            </Link>
          </li>
          <li>
            <Link to="/otp" className="text-white hover:text-gray-400">
              OTP
            </Link>
          </li>
          <li>
            <Link to="/autocomplete" className="text-white hover:text-gray-400">
              AutoComplete
            </Link>
          </li>
          <li>
            <Link to="/pagination" className="text-white hover:text-gray-400">
              Pagination
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
