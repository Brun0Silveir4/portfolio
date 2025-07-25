import "./HamburgerMenu.scss";
import { LuMoon, LuSun } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import CV from "../../../../public/docs/CV-Bruno-Silveira-Dionisio.pdf";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import { IoMdClose } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";

export default function HamburgerMenu({ close }) {
  const location = useLocation();
  const pathname = location.pathname;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isClosing, setIsClosing] = useState(false);

  const ANIMATION_DURATION = 300;

  const handleClose = () => {
    setIsClosing(true);
  };
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        close();
      }, ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isClosing, close]);

  const onButtonClick = () => {
    fetch(CV).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV Bruno Silveira.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`wrapper-side-menu ${isClosing ? "fade-out" : "fade-in"}`}
      onClick={handleClose}
    >
      <div
        className="side-menu"
        onClick={(e) => e.stopPropagation()}
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <div className="close-area">
          <IoMdClose size={30} className="close-btn" onClick={handleClose} />
        </div>

        <div className="navigate">
          <Link to="/" className="link-css" onClick={handleClose}>
            <p className={pathname === "/" ? "active" : ""}>Home</p>
          </Link>
          <Link to="/about" className="link-css" onClick={handleClose}>
            <p className={pathname.startsWith("/about") ? "active" : ""}>
              Sobre
            </p>
          </Link>
          <Link to="/projects" className="link-css" onClick={handleClose}>
            <p className={pathname === "/projects" ? "active" : ""}>Projetos</p>
          </Link>
          <Link to="/contact" className="link-css" onClick={handleClose}>
            <p className={pathname === "/contact" ? "active" : ""}>Contato</p>
          </Link>
        </div>

        <div className="btn-group">
          {theme === "dark" ? (
            <LuSun size={24} className="icon" onClick={toggleTheme} />
          ) : (
            <LuMoon size={24} className="icon" onClick={toggleTheme} />
          )}
          <button onClick={onButtonClick}>Download CV</button>
        </div>
      </div>
    </div>
  );
}
