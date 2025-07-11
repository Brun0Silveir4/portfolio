import Header from "../../components/utils/header/Header";
import "./About.scss";

import logoIBM from "../../../public/images/ibm-logo-svgrepo-com.svg";
import logoETEC from "../../../public/images/etec-favicon.svg";
import logoFATEC from "../../../public/images/FATEC_ZONA_LESTE2.png";

import AboutContent from "../../components/utils/about-content/AboutContent";
import CardExp from "../../components/card-exp/Card-exp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  let navigate = useNavigate();

  const goTo = (url) => {
    navigate(`/about/${url}`);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about-container">
      <Header />
      <AboutContent />
      <div className="experiences">
        <div
          className="experiences-title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p>Experiências</p>
        </div>
        <div
          className="card-exp-group"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <CardExp
            image={logoIBM}
            company={"IBM"}
            time={"2023–atual"}
            onClick={() => goTo("ibm")}
          />
          <CardExp
            image={logoFATEC}
            company={"Fatec da Zona Leste"}
            time={"2023–2024"}
            onClick={() => goTo("fatec")}
          />
          <CardExp
            image={logoETEC}
            company={"Etec da Zona Leste"}
            time={"2020–2022"}
            onClick={() => goTo("etec")}
          />
        </div>
      </div>
    </div>
  );
}
