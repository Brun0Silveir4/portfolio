import Header from "../../components/utils/header/Header";
import { useEffect } from "react";
import "./Projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../../components/Project/Project";

import teste from "../../../public/images/foto-formal.jpg";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projectList = [
    {
      title: 'To-do List',
      description: 'Gerenciador de tarefas com autenticação.',
      image: teste,
      techs: ['react', 'firebase', 'tailwind'],
    }
  ];

  return (
    <div className="projects-container">
      <Header />
      <div className="projects-content">
        <div className="projects-wrapper">
          {/* componentizar - inicio */}
          {projectList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          techs={project.techs}
        />
      ))}
          {/* componentizar - fim */}
        </div>
      </div>
    </div>
  );
}
