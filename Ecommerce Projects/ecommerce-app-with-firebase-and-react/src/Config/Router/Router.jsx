import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "../../Views/Contact/Contact";
import Home from "../../Views/Home/Home";
import Login from "../../Views/Login/Login";
import Collection from "../../Views/Collections/Collection";
import Category from "../../Views/Category/Category"
import Register from "../../Views/Register/Register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
