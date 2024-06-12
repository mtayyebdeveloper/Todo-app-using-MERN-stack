import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Store";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const { userData,getUserData,API } = useAuth();
  const token = localStorage.getItem("token");
  const [fullName, setfullName] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")



  const formController = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/api/contact/contact`,{
        fullName,
        email,
        message
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((message) => {
        if(message.status===200){
          toast.success(message.data.message);
          setfullName("");
          setemail("");
          setmessage("");
          getUserData()
        }else{
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
      <div className="h-[90vh] flex md:flex-row flex-col justify-between w-full sm:px-10 py-10 px-5">
        <div className="left w-full md:w-1/2 h-fullai-generated-8775228_640 md:flex items-center justify-center hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11015.251215758026!2d72.29103754500568!3d34.21229226430989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dec1b3efcfe17f%3A0x5084562e9fdc3b44!2sKalu%20Khan%2C%20Swabi%2C%20Khyber%20Pakhtunkhwa%2023200%2C%20Pakistan!5e1!3m2!1sen!2s!4v1717925888353!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="right flex flex-col items-center justify-center w-full h-screen md:h-full md:w-1/2 my-5 md:my-0 mx-0 md:mx-10">
          <form className="w-full" onSubmit={formController}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="full_name"
                name="fullName"
                id="floating_full_name"
                value={fullName?fullName:userData.fullName}
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
                type="email"
                name="email"
                value={email?email:userData.email}
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
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                rows="4"
                id="floating_message"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Enter message
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
