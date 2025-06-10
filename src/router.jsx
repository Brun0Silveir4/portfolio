import React from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/About/About"
import Specific from "./pages/About/specific-exp/Specific"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/about/:experience",
        element: <Specific />
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
])

export default router