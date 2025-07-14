import "./Theme.scss";
import React from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return <RouterProvider router={router} />
}