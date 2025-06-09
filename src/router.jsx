import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/About/About"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    }
])

export default router