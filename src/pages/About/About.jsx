import Header from "../../components/items/header/Header";
import "./About.scss";

import logoIBM from "../../../public/images/ibm-logo-svgrepo-com.svg";
import logoFATEC from "../../../public/images/FATEC_ZONA_LESTE.png";
import logoETEC from "../../../public/images/163492513-removebg-preview.png"

import AboutContent from "../../components/items/about-content/AboutContent";
import CardExp from "../../components/card-exp/Card-exp";

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
          <CardExp image={logoIBM} company={"IBM"} time={"2023-atual"} />
          <CardExp image={logoFATEC} company={"Fatec da Zona Leste"} time={"2023-2024"} />
          <CardExp image={logoETEC} company={"IBM"} time={"2023-atual"} />
        </div>
      </div>
    </div>
  );
}
