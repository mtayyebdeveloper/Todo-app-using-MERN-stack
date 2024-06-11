import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="bg-blue-700 text-white">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
              <li className=" me-4 md:me-6 hover:underline">
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>
              </li>
              <li className=" me-4 md:me-6 hover:underline">
                <NavLink to="/about" className="hover:underline">
                  About
                </NavLink>
              </li>
              <li className=" me-4 md:me-6 hover:underline">
                <Link to="/"  className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className=" me-4 md:me-6 hover:underline">
                <Link to="/"  className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="hover:underline">
                <NavLink to="/contact"  className="hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span class="block text-sm sm:text-center">
            © 2023{" "}
            <Link to="/" class="hover:underline">
              M Tayyeb Dev
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
