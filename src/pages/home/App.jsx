import "./App.scss";
import { useState, useEffect } from "react";

import Header from "../../components/header/Header";
import TextHome from "../../components/text-home/Text-home";



export default function App() {
  return (
    <div className="home-content">
      <Header />
      <div className="intro">
      <TextHome />
      </div>
    </div>
  );
}
