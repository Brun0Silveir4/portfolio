import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Specific from "./pages/specific-exp/Specific";
import ScrollToTop from "./components/utils/scroll-to-top/ScrollToTop";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

function withScroll(Component) {
  return (
    <>
      <ScrollToTop />
      <Component />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: withScroll(Home),
  },
  {
    path: "/about",
    element: withScroll(About),
  },
  {
    path: "/about/:experience",
    element: withScroll(Specific),
  },
  {
    path: "/contact",
    element: withScroll(Contact)
  },
  {
    path: "/projects",
    element: withScroll(Projects)
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
