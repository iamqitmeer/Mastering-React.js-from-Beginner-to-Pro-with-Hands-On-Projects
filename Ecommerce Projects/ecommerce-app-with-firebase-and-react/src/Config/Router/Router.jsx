import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Contact from "../../Views/Contact/Contact";
import Home from "../../Views/Home/Home";
import Login from "../../Views/Login/Login";
import Collection from "../../Views/Collections/Collection";
import Category from "../../Views/Category/Category"
import Register from "../../Views/Register/Register"
import SellProduct from "../../Views/SellProduct/SellProduct";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
      {
        path: "/sellProduct",
        element: <SellProduct />,
      },
    ],
  },
]);

function Layout() {

  const navigate = useNavigate()
  const [user, setUser] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      console.log(user);
    });
  }, [])

  useEffect(() => {
    const { pathname } = window.location;
    console.log(pathname)

    if (user) {
      if (pathname === '/login' || pathname === '/register') {
        navigate('/')
      }
    } else {
      if (pathname === '/sellProduct') {
        navigate('/')
      }
    }
  }, [window.location.pathname, user])
  return(
    <>
    <Outlet/>
    </>
  )
}

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
