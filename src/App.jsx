import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar /><Home /></>,
    },
    {
      path: "/about",
      element: <><NavBar /><About /></>,
    },
    {
      path: "/contact",
      element: <><NavBar /><Contact /></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
      <Footer />
    </>
  );
}

export default App;
