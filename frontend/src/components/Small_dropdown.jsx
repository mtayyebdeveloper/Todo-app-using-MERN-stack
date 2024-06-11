import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/Store";

function Small_dropdown() {
  const [open, setopen] = useState(false);
  const { userData, logout, getUserData } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
        onClick={() => setopen(!open)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={userData.avatar}
          alt="user photo"
        />
      </button>
      <div
        className={`${
          open ? "block" : "hidden"
        } z-50 my-4 top-12 right-5 text-base absolute list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900">
            {userData.username}
          </span>
          <span className="block text-sm  text-gray-500 truncate">
            {userData.email}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
          </li>
          {userData.isAdmin ? (
            <li>
              <Link
                to="/admin/deshboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => logout()}
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Small_dropdown;
