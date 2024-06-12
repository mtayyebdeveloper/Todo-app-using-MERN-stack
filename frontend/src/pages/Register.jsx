import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../store/Store";

function Register() {
  const navigate = useNavigate();
  const { API } = useAuth();
  const [openeye, setopeneye] = useState(false);
  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [avatar, setavatar] = useState(null);

  const formController = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("file", avatar); // File object
    formData.append("password", password);

    axios
      .post(
        `${API}/api/auth/register`,
        formData
      )
      .then((message) => {
        if (message.status === 200) {
          toast.success(message.data.message);
          setfullName("");
          setusername("");
          setemail("");
          setpassword("");
          setavatar(null);
          navigate("/login");
        } else {
          toast.error(message.data.message);
        }
      })
      .catch((error) => {
        if (error.response.data) {
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
        <div className="left w-full md:w-1/2 h-full md:flex items-center justify-center hidden">
          <img
            src="ai-generated-8775228_640.png"
            className=" w-[50vw] h-[80vh]"
            alt="Programmers work"
          />
        </div>
        <div className="right flex flex-col items-center justify-center w-full h-screen md:h-full md:w-1/2 my-5 md:my-0 mx-0 md:mx-10">
          <form
            className="w-full"
            onSubmit={formController}
            enctype="multipart/form-data"
          >
            <div className="w-full flex items-center justify-center mb-5">
              <label
                htmlFor="fileinput"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {avatar ? (
                  <>
                    <img
                      src={URL.createObjectURL(avatar)}
                      className="w-36 h-36 rounded-full border-blue-600 border object-cover"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-user rounded-full border p-8 border-blue-600 text-7xl px-9 text-black"></i>
                  </>
                )}
                <p className="pt-2 text-center text-lg text-gray-500">
                  Upload photo
                </p>
              </label>
              <input
                type="file"
                name="file"
                id="fileinput"
                accept="image/*"
                onChange={(e) => setavatar(e.target.files[0])}
                className="hidden"
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="fullName"
                id="floating_full_name"
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_full_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Enter Full Name
              </label>
            </div>
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
                Enter Username
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Enter Email
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
                  className={`fa-solid fa-${openeye ? "eye-slash" : "eye"} cursor-pointer absolute
                   right-0`}
                  onClick={() => setopeneye(!openeye)}
                  aria-hidden="true"
                ></i>
              </div>
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Enter Password
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Register
            </button>
          </form>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
