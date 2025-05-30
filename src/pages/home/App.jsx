import "./App.scss";
import { useState, useEffect } from "react";

import Header from "../../components/header/Header";

export default function App() {



  return (
    <div className="home-content">
     <Header />
      <div className="intro">
        <div className="text-group">
          <div className="title"></div>
          <div className="resumed-bio"></div>
          <div className="locale"></div>
          <div className="social-media"></div>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
}
