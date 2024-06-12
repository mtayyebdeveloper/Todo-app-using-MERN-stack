import React, { useState } from "react";
import { useAuth } from "../store/Store";
import axios from "axios";
import { toast } from "react-toastify";

function Admin_todos() {
  const { adminalltodos, deleteTodosfromAdmin,getalltodosForAdmin,API } = useAuth();
  const token = localStorage.getItem("token");
  const [open, setopen] = useState(false);
  const [todoId, settodoId] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(
        `${API}/api/admin/updatetodo/${todoId}`,
        {
          workspaceName,
          username,
          email,
          password,
          massage,
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
          getalltodosForAdmin();
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
         
          <form onSubmit={formSubmit} className="w-11/12 md:w-3/4 mx-auto mt-10 text-white">
          <i className="fa-solid fa-xmark absolute top-5 right-5 text-3xl cursor-pointer" onClick={() => setopen(!open)} aria-hidden="true"></i>
          <h1 className="text-3xl text-center font-bold">Update Todo</h1>
            <div className="mb-5">
              <label
                htmlFor="spacename"
                className="block mb-2 text-sm font-medium"
              >
                Work Space Name
              </label>
              <input
                type="text"
                name="workspaceName"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                id="spacename"
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
                Username or Full Name
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Doe etc."
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="shadow-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                name="massage"
                value={massage}
                onChange={(e) => setMassage(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-2xl font-bold mb-3">Todos</div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Workspace Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Username
                </th>
                <th scope="col" className="px-3 py-3">
                  Email
                </th>
                <th scope="col" className="px-3 py-3">
                  Password
                </th>
                <th scope="col" className="px-3 py-3">
                  Description
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
              {adminalltodos.map((todo, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td className="px-3 py-4">{todo.workspaceName}</td>
                  <td className="px-3 py-4">{todo.username}</td>
                  <td className="px-3 py-4">{todo.email}</td>
                  <td className="px-3 py-4">{todo.password}</td>
                  <td className="px-3 py-4">{todo.massage}</td>
                  <td className="px-3 py-4">
                    <div
                      className="font-medium cursor-pointer text-blue-600 hover:underline"
                      onClick={() => {setopen(!open),settodoId(todo._id)}}
                    >
                      Edit
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div
                      className="font-medium cursor-pointer text-blue-600 hover:underline"
                      onClick={() => deleteTodosfromAdmin(todo._id)}
                    >
                      Delete
                    </div>
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

export default Admin_todos;
