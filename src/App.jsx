import { useState } from "react";
import "./App.scss";
import me from "../src/img/teste.png";

function App() {
  return (
    <div className="container">
      <div className="main-content">
        <div className="text">
          <div className="title">
            <h1>Front-End</h1>
            <h1>Developer</h1>
          </div>
          <p>Bruno Silveira Dionisio</p>
          <div className="btn-group">
            <button>Download CV</button>
          </div>
        </div>
        <img src={me} alt="" className="image-content" />
      </div>
    </div>
  );
}

export default App;
