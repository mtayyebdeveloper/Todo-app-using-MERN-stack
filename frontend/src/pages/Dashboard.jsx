import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Store";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [opennav, setopennav] = useState(false);
  const { userData, logout, allcontacts, getUserData } = useAuth();
  useEffect(() => {
    getUserData();
  }, []);
  return userData.isAdmin ? (
    <>
      <div className="full-container">
        {/* <!-- drawer init and show --> */}
        <div className="bg-white w-full h-screen">
          <div className="button flex items-center justify-center">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none fixed top-1"
              type="button"
              onClick={() => setopennav(!opennav)}
            >
              Show navigation
            </button>
          </div>
          <div className="main-center w-11/12 mx-auto">
            <div className="welcome w-full h-[100px] mt-3 md:h-[130px] bg-blue-600 text-xl text-white font-bold md:text-2xl text-center flex items-center justify-center">
              Welcome to Deshboard
            </div>
            <Outlet />
          </div>
        </div>

        {/* <!-- drawer component --> */}
        <div
          className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
            opennav ? "transform-none" : "-translate-x-full"
          } bg-[#000000d8] text-white`}
        >
          <h5 className="text-base font-semibold text-white uppercase">Menu</h5>
          <button
            className="text-white hover:text-blue-500 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
            onClick={() => setopennav(!opennav)}
          >
            <i className="fa-solid fa-close text-2xl"></i>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <NavLink
                  to="/admin/deshboard"
                  className="flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-black"
                >
                  <svg
                    className="w-5 h-5 transition duration-75 group-hover:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/deshboard/users"
                  className="flex items-center p-2 hover:text-black rounded-lg hover:bg-gray-100 group"
                >
                  <i className="fa-solid fa-users"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/deshboard/todos"
                  className="flex items-center p-2 hover:text-black rounded-lg hover:bg-gray-100 group"
                >
                  <i className="fa-regular fa-rectangle-list"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Todos</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/deshboard/inbox"
                  className="flex items-center p-2 hover:text-black rounded-lg hover:bg-gray-100 group"
                >
                  <i className="fa-solid fa-inbox"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-200 rounded-full">
                    {allcontacts.length}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/deshboard/settings"
                  className="flex items-center p-2 hover:text-black rounded-lg hover:bg-gray-100 group"
                >
                  <i className="fa-solid fa-gear"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </NavLink>
              </li>
              <li>
                <div
                  className="flex items-center p-2 hover:text-black rounded-lg hover:bg-gray-100 group cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <i className="fa-solid fa-home"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                </div>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 hover:text-black rounded-lg hover:bg-gray-100 group cursor-pointer"
                  onClick={() => logout()}
                >
                  <i className="fa-solid fa-sign-out"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign out
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Dashboard;
