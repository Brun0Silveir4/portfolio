import Header from "../../components/items/header/Header";
import "./About.scss";


import AboutContent from "../../components/items/about-content/AboutContent";

export default function About() {


  return (
    <div className="about-container">
      <Header />
      <AboutContent />
      <div className="experiences">
        <div className="experiences-title">
          <p>Experiências</p>
        </div>
        <div className="card-exp-group">
          <div className="card-exp">
            <div className="header-card">
              <div className="img-header-exp">
                
              </div>
              <div className="company-exp"></div>
              <div className="time-exp"></div>
            </div>
            <div className="exp-content">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
