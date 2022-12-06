import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn border-0 bg-[#F4A896]" : "btn btn-ghost"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/generetor"
          className={({ isActive }) =>
            isActive ? "btn border-0 bg-[#F4A896]" : "btn btn-ghost"
          }
        >
          Generator
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#358597] text-white shadow-2xl mt-2 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-base-200 rounded-box w-52"
            >
              {navbarItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex">{navbarItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
