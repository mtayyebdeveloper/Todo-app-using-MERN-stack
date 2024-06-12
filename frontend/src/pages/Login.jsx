import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../store/Store";

function Register() {
  const navigate = useNavigate();
  const { API } = useAuth();
  const [openeye, setopeneye] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const formController = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/api/auth/login`, {
        username,
        password,
      })
      .then((message) => {
        if (message.status === 200) {
          const token = message.data.token;
          localStorage.setItem("token", token);
          toast.success(message.data.message);
          navigate("/");
        } else {
          toast.error(message.data.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data[0].message);
        } else {
          console.log(error);
        }
      });
  };
  return (
    <>
      <div className="h-screen flex md:flex-row flex-col justify-between w-full sm:px-10 py-10 px-5">
        <i
          className="fa-solid fa-close absolute right-7 top-7 text-xl hover:text-blue-500"
          onClick={() => navigate("/")}
        ></i>
        <div className="left w-full md:w-1/2 h-fullai-generated-8775228_640 md:flex items-center justify-center hidden">
          <img
            src="ai-generated-8775228_640.png"
            className=" w-[50vw] h-[80vh]"
            alt="Programmers work"
          />
        </div>
        <div className="right flex flex-col items-center justify-center h-screen md:h-full w-full md:w-1/2 mt-5 md:mt-0  mx-0 md:mx-10">
          <form className="w-full" onSubmit={formController}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                id="floating_username"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Enter username
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <div className="flex items-center">
                <input
                  type={openeye ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <i
                  className={`fa-solid fa-${
                    openeye ? "eye-slash" : "eye"
                  } cursor-pointer absolute right-0 top-4`}
                  onClick={() => setopeneye(!openeye)}
                  aria-hidden="true"
                ></i>
              </div>
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Enter Password
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </form>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Not registered?{" "}
            <Link
              to="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
