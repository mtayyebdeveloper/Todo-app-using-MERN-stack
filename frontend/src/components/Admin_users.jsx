import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Store";
import axios from "axios";
import { toast } from "react-toastify";

function Admin_users() {
  const {
    allusers,
    deleteusersfromAdmin,
    getAllusersforAdmin,
    getUserData,
    API,
  } = useAuth();
  const token = localStorage.getItem("token");
  const [open, setopen] = useState(false);
  const [userId, setuserId] = useState("");
  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    getAllusersforAdmin();
    getUserData();
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(
        `${API}/api/admin/updateuser/${userId}`,
        {
          fullName,
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((message) => {
        if (message.status === 200) {
          toast.success(message.data.message);
          getAllusersforAdmin();
          setopen(false);
        } else {
          console.log(message.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      <div className="data-list w-full mx-auto mt-5">
        <div
          className={`updateForm w-full z-50 bg-[#000000b4] absolute top-0 left-0 h-full ${
            open ? "block" : "hidden"
          }`}
        >
          <form
            onSubmit={formSubmit}
            className="w-11/12 md:w-3/4 mx-auto mt-10 text-white"
          >
            <i
              className="fa-solid fa-xmark absolute top-5 right-5 text-3xl text-white cursor-pointer"
              onClick={() => setopen(!open)}
              aria-hidden="true"
            ></i>
            <h1 className="text-3xl text-center font-bold">Update User</h1>
            <div className="mb-5">
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
                id="fullname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="facebook.com etc."
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                id="username"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Doe etc."
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                id="password"
                className="shadow-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-2xl font-bold mb-3">Users</div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Full Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Username
                </th>
                <th scope="col" className="px-3 py-3">
                  Email
                </th>
                {/* <th scope="col" className="px-3 py-3">
                  Password
                </th> */}
                <th scope="col" className="px-3 py-3">
                  Admin
                </th>
                <th scope="col" className="px-3 py-3">
                  Update
                </th>
                <th scope="col" className="px-3 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {allusers.map((user, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td className="px-3 py-4">{user.fullName}</td>
                  <td className="px-3 py-4">{user.username}</td>
                  <td className="px-3 py-4">{user.email}</td>
                  {/* <td className="px-3 py-4">{user.password}</td> */}
                  <td className="px-3 py-4">{user.isAdmin.toString()}</td>
                  <td className="px-3 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => {
                        setopen(!open), setuserId(user._id.toString());
                      }}
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-3 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => deleteusersfromAdmin(user._id.toString())}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin_users;
