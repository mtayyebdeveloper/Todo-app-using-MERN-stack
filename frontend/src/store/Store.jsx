import axios from "axios";
import { toast } from "react-toastify";
import React, { createContext, useState, useEffect, useContext } from "react";

const store = createContext({});

export const ContextAPI = ({ children }) => {
  const [alltodoes, setalltodoes] = useState([]);
  const [adminalltodos, setadminalltodos] = useState([]);
  const [allusers, setallusers] = useState([]);
  const [allcontacts, setallcontacts] = useState([]);
  const token = localStorage.getItem("token");
  const [userData, setuserData] = useState({});
  const API = import.meta.env.VITE_BACKEND_SITE_URL;

  // logout function..............................
  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successfuly");
  };

  // get all users for admin...................
  const getAllusersforAdmin = () => {
    axios
      .get(`${API}/api/admin/allusers`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setallusers(response.data.allUsers);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get all todos for admin...................
  const getalltodosForAdmin = () => {
    axios
      .get(`${API}/api/admin/alltodos`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setadminalltodos(response.data.alltodos);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get all contacts for admin...................
  const getAllContacts = () => {
    axios
      .get(`${API}/api/admin/allcontacts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setallcontacts(response.data.allContacts);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // delete all contacts from admin side...................
  const deletecontactsfromAdmin = (id) => {
    axios
      .delete(`${API}/api/admin/deletecontact/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllContacts();
        } else {
          console.log("Unexpected response status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error during delete request:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
        }
      });
  };

  // delete all users from admin side...................
  const deleteusersfromAdmin = (id) => {
    axios
      .delete(`${API}/api/admin/deleteuser/${id}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 200) {
          toast.success(response.data.message);
          getAllusersforAdmin();
        } else {
          console.log("Unexpected response status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error during delete request:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
        }
      });
  };

  // delete all todos from admin side...................
  const deleteTodosfromAdmin = (id) => {
    axios
      .delete(`${API}/api/admin/deletetodo/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((message) => {
        if (message.status === 200) {
          toast.success(message.data.message);
          getalltodosForAdmin();
        } else {
          console.log(message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get current user data for edit profile........................
  const getUserData = () => {
    axios
      .get(`${API}/api/auth/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((data) => {
        setuserData(data.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get current user all todoes............................
  const getAllTodo = () => {
    axios
      .get(`${API}/api/todo/alltodos`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        if (response.statusText == "OK") {
          setalltodoes(response.data.data);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // delete current user todoes..........................
  const deleteTodo = (id) => {
    axios
      .delete(`${API}/api/todo/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((message) => {
        if (message.statusText == "OK") {
          toast.success(message.data.message);
          getAllTodo();
        } else {
          console.log(message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserData();
    getAllusersforAdmin();
    getAllTodo();
    getAllContacts();
    getalltodosForAdmin();
  }, []);

  return (
    <store.Provider
      value={{
        alltodoes,
        deleteTodo,
        getAllTodo,
        userData,
        logout,
        allusers,
        deleteusersfromAdmin,
        adminalltodos,
        deleteTodosfromAdmin,
        allcontacts,
        getUserData,
        deletecontactsfromAdmin,
        getalltodosForAdmin,
        getAllusersforAdmin,
        API
      }}
    >
      {children}
    </store.Provider>
  );
};

export const useAuth = () => {
  return useContext(store);
};
