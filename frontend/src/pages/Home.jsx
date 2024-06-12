import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../store/Store";
import { toast } from "react-toastify";

function Home() {
  const token = localStorage.getItem("token");
  const [openeye, setopeneye] = useState(false);
  const { alltodoes, deleteTodo, getAllTodo, getUserData,API } = useAuth();
  const [todoId, settodoId] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState("");

  useEffect(() => {
    getAllTodo();
    getUserData();
  }, []);

  const formController = async (e) => {
    e.preventDefault();
    if (todoId == "") {
      axios
        .post(
          `${API}/api/todo/create`,
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
            setWorkspaceName("");
            setUsername("");
            setEmail("");
            setPassword("");
            setMassage("");
            getAllTodo();
          } else {
            console.log(message);
          }
        })
        .catch((error) => {
          toast.error(error.response.data[0].message);
        });
    } else {
      axios
        .patch(
          `${API}/api/todo/update/${todoId}`,
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
          if (message.statusText == "OK") {
            toast.success(message.data.message);
            setWorkspaceName("");
            setUsername("");
            setEmail("");
            setPassword("");
            setMassage("");
            getAllTodo();
          } else {
            console.log(message);
          }
        })
        .catch((error) => {
          toast.error(error.response.data[0].message);
        });
    }
  };

  const editTodo = (id) => {
    settodoId(id);
    axios
      .get(`${API}/api/todo/todo/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((message) => {
        if (message.status === 200) {
          console.log(message.data.todo);
          setWorkspaceName(message.data.todo.workspaceName);
          setUsername(message.data.todo.username);
          setEmail(message.data.todo.email);
          setPassword(message.data.todo.password);
          setMassage(message.data.todo.massage);
        } else {
          console.log(message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {token ? (
        <>
          <div className="full-container w-full h-full py-10">
            <div className="form w-11/12 md:w-3/4 mx-auto">
              <form onSubmit={formController}>
                <div className="mb-5">
                  <label
                    htmlFor="spacename"
                    className="block mb-2 text-sm font-medium text-gray-900"
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
                    className="block mb-2 text-sm font-medium text-gray-900"
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
                    className="block mb-2 text-sm font-medium text-gray-900"
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
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg">
                    <input
                      type={openeye ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      className="shadow-sm outline-none bg-transparent text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      required
                    />
                    <i
                      className={`fa-solid fa-${
                        openeye ? "eye-slash" : "eye"
                      } cursor-pointer relative right-4`}
                      onClick={() => setopeneye(!openeye)}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
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
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    I agree with the{" "}
                    <Link to="/terms" className="text-blue-600 hover:underline">
                      terms and conditions
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="data-list w-11/12 md:w-3/4 mx-auto mt-10">
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
                    {alltodoes.map((todo, index) => (
                      <tr className="bg-white border-b" key={index}>
                        <td className="px-3 py-4">{todo.workspaceName}</td>
                        <td className="px-3 py-4">{todo.username}</td>
                        <td className="px-3 py-4">{todo.email}</td>
                        <td className="px-3 py-4">{todo.password}</td>
                        <td className="px-3 py-4">{todo.massage}</td>
                        <td className="px-3 py-4">
                          <a
                            href="#"
                            className="font-medium text-blue-600 hover:underline"
                            onClick={() => editTodo(todo._id)}
                          >
                            Edit
                          </a>
                        </td>
                        <td className="px-3 py-4">
                          <a
                            href="#"
                            className="font-medium text-blue-600 hover:underline"
                            onClick={() => deleteTodo(todo._id)}
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
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
