import "./HamburgerMenu.scss";
import { LuMoon, LuSun } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import CV from "../../../../public/docs/CV-Bruno-Silveira-Dionisio.pdf";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import { IoMdClose } from "react-icons/io";

export default function HamburgerMenu({ close }) {
  const location = useLocation();
  const pathname = location.pathname;
  const { theme, toggleTheme } = useContext(ThemeContext);

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

  return (
    <div className="wrapper-side-menu" onClick={close}>
      <div className="side-menu" onClick={(e) => e.stopPropagation()}>
        <div className="close-area">
            <IoMdClose size={30} className="close-btn" onClick={close} />
        </div>

        <div className="navigate">
          <Link to="/" className="link-css" onClick={close}>
            <p className={pathname === "/" ? "active" : ""}>Home</p>
          </Link>
          <Link to="/about" className="link-css" onClick={close}>
            <p className={pathname.startsWith("/about") ? "active" : ""}>Sobre</p>
          </Link>
          <Link to="/projects" className="link-css" onClick={close}>
            <p className={pathname === "/projects" ? "active" : ""}>Projetos</p>
          </Link>
          <Link to="/contact" className="link-css" onClick={close}>
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
