import React, { useState } from "react";
import Small_dropdown from "./Small_dropdown";
import { useNavigate, NavLink,Link } from "react-router-dom";

function Header() {
  const [navopen, setnavopen] = useState(false);
  const navigate =useNavigate()
  const token = localStorage.getItem("token");
  return (
    <>
      <nav className="border-gray-200 bg-blue-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="M Tayyeb Logo"
            />
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
              M Tayyeb Dev
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <!-- Dropdown menu --> */}
            {token?<Small_dropdown/>:<><button className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={()=>navigate("/register")}>Sign up</button></>}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:text-black md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setnavopen(!navopen)}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fa-solid fa-bars text-3xl"></i>
            </button>
          </div>
          {/* <!-- Mobile menu and desktop --> */}
          <div
            className={`${
              navopen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-700">
              <li>
                <NavLink
                  to="/"
                  className={`text-black block py-2 px-3 rounded md:bg-transparent md:text-white md:p-0`}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={`text-black block py-2 px-3 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0`}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={`text-black block py-2 px-3 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
