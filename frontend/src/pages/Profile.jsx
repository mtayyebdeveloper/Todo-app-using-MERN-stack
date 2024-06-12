import React, { useState } from "react";
import { useAuth } from "../store/Store";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Profile() {
  const token = localStorage.getItem("token");
  const { userData, getUserData,API } = useAuth();
  const [openeye, setopeneye] = useState(false);
  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [avatar, setavatar] = useState(null);
  const [currentpassword, setcurrentpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");

  const updateUserData = async () => {
    const formdata = new FormData();
    formdata.append("fullName", fullName);
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("currentpassword", currentpassword);
    formdata.append("newpassword", newpassword);
    formdata.append("file", avatar);

    axios
      .patch(
        `${API}/api/auth/update`,
        formdata,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          getUserData();
        } else {
          toast.error(response.data.message);
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
      <div className="full-container flex items-center justify-center h-screen w-screen">
        <Link to="/">
          <i
            className="fa-solid fa-arrow-left text-2xl font-bold absolute top-5 left-5"
            title="Back to Home"
          ></i>
        </Link>
        <div className="profile flex flex-col w-11/12 sm:w-2/3 md:w-1/2 h-4/5 md:h-full mx-auto items-center pt-10">
          <div className="img">
            <label htmlFor="img">
              <img
                src={avatar ? URL.createObjectURL(avatar) : userData.avatar}
                className="w-36 h-36 rounded-full cursor-pointer border border-blue-700 object-cover"
                alt="User Profile"
              />
              <i className="fa-solid fa-camera relative top-[-22px] left-[6.5rem]"></i>
            </label>
            <input
              type="file"
              id="img"
              className="hidden"
              accept="image/*"
              onChange={(e) => setavatar(e.target.files[0])}
            />
          </div>
          <div className="datas my-5 w-full">
            <div className="fname flex flex-col w-full">
              <label htmlFor="fname" className=" font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="fname"
                className="w-full bg-slate-200 p-2 rounded-lg outline-none border-[3px] border-blue-300"
                value={fullName ? fullName : userData.fullName}
                onChange={(e) => setfullName(e.target.value)}
              />
            </div>
            <div className="username flex flex-col w-full mt-3">
              <label htmlFor="username" className=" font-semibold">
                Username
              </label>
              <input
                type="text"
                className="w-full bg-slate-200 p-2 rounded-lg outline-none border-[3px] border-blue-300"
                id="username"
                value={username ? username : userData.username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="email flex flex-col w-full mt-3">
              <label htmlFor="email" className=" font-semibold">
                Email
              </label>
              <input
                type="text"
                className="w-full bg-slate-200 p-2 rounded-lg outline-none border-[3px] border-blue-300"
                id="email"
                value={email ? email : userData.email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="currentpassword flex flex-col w-full mt-3">
              <label htmlFor="currentpassword" className=" font-semibold">
                Old Password
              </label>
              <div className="flex items-center bg-slate-200 rounded-lg border-[3px] border-blue-300">
                <input
                  type={openeye ? "text" : "password"}
                  className="w-full p-2 bg-transparent outline-none  rounded-l-lg"
                  id="currentpassword"
                  value={currentpassword}
                  onChange={(e) => setcurrentpassword(e.target.value)}
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
            <div className="newpassword flex flex-col w-full mt-3">
              <label htmlFor="newpassword" className=" font-semibold">
                New Password
              </label>
              <div className="flex items-center bg-slate-200 rounded-lg border-[3px] border-blue-300">
              <input
                type={openeye ? "text" : "password"}
                id="newpassword"
                className="w-full p-2 rounded-lg outline-none bg-transparent"
                value={newpassword}
                onChange={(e) => setnewpassword(e.target.value)}
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
            <div className="submit-btn flex w-full mt-3">
              <button
                type="submit"
                onClick={updateUserData}
                className="w-full bg-blue-500 p-2 rounded-lg text-white font-semibold hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
