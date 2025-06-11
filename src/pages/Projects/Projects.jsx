import Header from "../../components/utils/header/Header";
import { useEffect } from "react";
import "./Projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="projects-container">
      <Header />
      <div className="projects-content">
        <div className="projects-title" data-aos="fade-up" data-aos-duration="1000">
          <p>Work In Progress</p>
        </div>
      </div>
    </div>
  );
}
