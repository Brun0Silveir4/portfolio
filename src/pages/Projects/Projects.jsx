import Header from "../../components/utils/header/Header";
import { useEffect } from "react";
import "./Projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../../components/Project/Project";

import Aphrodite from "../../../public/images/aphrodite.png";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projectList = [
    {
      title: "Asset Aphrodite - IBM",
      description: "Asset com interface replicável e adaptável ao cliente, com foco em exibir um chat criado no WatsonX Orchestrate.",
      image: Aphrodite,
      techs: ["react", "orchestrate", "carbon", 'sass'],
    }
  ];

  return (
    <div className="projects-container">
      <Header />
      <div className="projects-content">
        <div className="projects-wrapper">
          {projectList.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techs={project.techs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
