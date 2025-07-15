import Header from "../../components/utils/header/Header";
import { useEffect } from "react";
import "./Projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../../components/Project/Project";

import Aphrodite from "../../../public/images/aphrodite.png";
import realState from "../../../public/images/real-state-page.png"
import tipCalculator from "../../../public/images/tipCalculator.png"

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projectList = [
    {
      title: "Tip Calculator",
      description: "Página simples e intuitiva com o objetivo de ser uma calculadora de gorjeta baseada na quantidade de pessoas.",
      image: tipCalculator,
      techs: ["react", "sass"],
      clicable: true,
      liveLink: 'https://tip-calculator-six.vercel.app',
      repo: 'https://github.com/Brun0Silveir4/tip-calculator'
    },
    {
      title: "Landing Page - Real State",
      description: "Landing page simples para promover uma imobiliária fictícia com interface, responsiva e focada na melhor experiência do usuário.",
      image: realState,
      techs: ["react", "sass"],
      clicable: true,
      liveLink: 'https://landing-page-real-state-beige.vercel.app',
      repo: 'https://github.com/Brun0Silveir4/Landing-Page---Real-State?tab=readme-ov-file'
    },
    {
      title: "Asset Aphrodite - IBM",
      description: "Asset com interface replicável e adaptável ao cliente, com foco em exibir um chat criado no WatsonX Orchestrate.",
      image: Aphrodite,
      techs: ["react", "orchestrate", "carbon", 'sass'],
      clicable: false,
      liveLink: '',
      repo: ''
    }
  ];

  return (
    <div className="projects-container">
      <Header />
      <div className="projects-content">
        <div className="projects-wrapper" data-aos="fade-down" data-aos-duration="1000">
          {projectList.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techs={project.techs}
              liveLink={project.liveLink}
              repo={project.repo}
              clicable={project.clicable}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
