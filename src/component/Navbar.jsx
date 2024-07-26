import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" fixed left-0 top-0 w-full bg-blue-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a className="text text-2xl font-semibold" href="/#">
          E-Kart Limited
        </a>

        <button
          className="text-white md:hidden flex items-center px-3 py-2 border rounded border-gray-700 hover:text-gray-400"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden md:flex md:items-center md:space-x-6" id="navbarSupportedContent">
          <NavLink
            className="hover:text-violet-700"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text hover:text-violet-700"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="text hover:text-violet-700"
            to="/dashboard"
          >
            Products
          </NavLink>
          <NavLink
            className="text hover:text-violet-700"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="text hover:text-violet-700"
            to="/shopping"
          >
            Store
          </NavLink>
          <NavLink
            className="text hover:text-violet-700"
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
