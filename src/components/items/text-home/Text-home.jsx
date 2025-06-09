import formalPhoto from "../../../../public/images/foto-formal.jpg";
import { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import AOS from "aos";
import 'aos/dist/aos.css'
import "./Text-home.scss";

export default function TextHome() {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="intro">

    <div className="intro-content">
      <div className="text-content" data-aos="fade-right" data-aos-duration="1100">
        <div className="name-bio">
          <div className="title">
            <p>Oi! Meu nome é Bruno!</p>
          </div>
          <div className="resumed-bio">
            <p>
              Sou desenvolvedor web full stack, com foco em React e Node.js.
              Formado em Análise e Desenvolvimento de Sistemas pela Fatec Zona
              Leste, atuo na criação de aplicações modernas, do front ao
              back-end.
            </p>
          </div>
        </div>
        <div className="locale">
          <IoLocationOutline size={24} />
          <p>São Paulo, Brasil</p>
        </div>
        <div className="social-media">
          <a href="https://github.com/Brun0Silveir4" target="_blank">
            <FiGithub className="git" />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-silveira-dionisio/"
            target="_blank"
          >
            <TiSocialLinkedin className="link" />
          </a>
        </div>
      </div>
      <div className="image" data-aos="fade-left" data-aos-duration="1100">
        <img src={formalPhoto} alt="" className="main-photo" />
      </div>
    </div>
    </div>
  );
}
