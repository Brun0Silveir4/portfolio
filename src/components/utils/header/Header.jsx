import { useState, useEffect } from "react";
import "./Header.scss";
import { LuMoon } from "react-icons/lu";
import CV from "../../../../public/docs/CV-Bruno-Silveira-Dionisio.pdf";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className={`header ${isScrolled ? "transparent" : ""}`}>
      <div className="header-items">
        <div className="navigate">
          <Link to="/" className="link-css">
            <p className={pathname === "/" ? "active" : ""}>Home</p>
          </Link>
          <Link to="/about" className="link-css">
            <p className={pathname.startsWith("/about") ? "active" : ""}>Sobre</p>
          </Link>
          <Link to="/projects" className="link-css">
            <p className={pathname === "/projects" ? "active" : ""}>Projetos</p>
          </Link>
          <Link to="/contact" className="link-css">
            <p className={pathname === "/contact" ? "active" : ""}>Contato</p>
          </Link>
        </div>
        <div className="btn-group">
          <LuMoon size={24} className="icon" />
          <button onClick={onButtonClick}>Download CV</button>
        </div>
      </div>
    </div>
  );
}
