import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import About from "./pages/About.jsx";
import AllUsers from './components/Admin_users.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AllTodos from './components/Admin_todos.jsx'
import Profile from "./pages/Profile.jsx";
import AllInbox from './components/Admin_inbox.jsx'
import Admin_settings from './components/Admin_setting.jsx'
import Terms from "./pages/Terms.jsx";
import AdminHome from './components/Admin_home.jsx'
import Contact from "./pages/Contact.jsx";
import {ContextAPI} from './store/Store.jsx'
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    element: <Dashboard />,
    path: "/admin/deshboard",
    children:[
      {
        element:<AdminHome/>,
        path:""
      },
      {
        element:<AllUsers/>,
        path:"users"
      },
      {
        element:<AllTodos/>,
        path:"todos"
      },
      {
        element:<AllInbox/>,
        path:"inbox"
      },
      {
        element:<Admin_settings/>,
        path:"settings"
      }
    ]
  },
  {
    element:<ErrorPage/>,
    path:"*"
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Profile />,
    path: "/profile",
  },
  {
    element: <Terms />,
    path: "/terms",
  },
  {
    element: <Register />,
    path: "/register",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextAPI>
    <ToastContainer autoClose={3000} />
    <RouterProvider router={router} />
  </ContextAPI>
);
