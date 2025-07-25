import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import "./Header.scss";
import { LuMoon, LuSun } from "react-icons/lu";
import CV from "../../../../public/docs/CV-Bruno-Silveira-Dionisio.pdf";
import { Link, useLocation } from "react-router-dom";
import { useWindowDimension } from "../../../hooks/useWindowDimension";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Novo estado

  const { theme, toggleTheme } = useContext(ThemeContext);

  const location = useLocation();
  const pathname = location.pathname;

  const { width } = useWindowDimension();
  const isMobile = width <= 768; 
  const closeMenu = () => setMenuOpen(false);

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
    <>
      <div className={`header ${isScrolled ? "transparent" : ""}`}>
        {isMobile ? (
          <div className="hamburgerIcon" onClick={() => setMenuOpen(true)}>
           <GiHamburgerMenu size={29} className="hamburgerIcon"/>
          </div>
        ) : (
          <div className="header-items">
            <div className="navigate">
              <Link to="/" className="link-css">
                <p className={pathname === "/" ? "active" : ""}>Home</p>
              </Link>
              <Link to="/about" className="link-css">
                <p className={pathname.startsWith("/about") ? "active" : ""}>
                  Sobre
                </p>
              </Link>
              <Link to="/projects" className="link-css">
                <p className={pathname === "/projects" ? "active" : ""}>
                  Projetos
                </p>
              </Link>
              <Link to="/contact" className="link-css">
                <p className={pathname === "/contact" ? "active" : ""}>Contato</p>
              </Link>
            </div>
            <div className="btn-group">
              {theme == "dark" ? (
                <LuSun size={24} className="icon" onClick={toggleTheme} />
              ) : (
                <LuMoon size={24} className="icon" onClick={toggleTheme} />
              )}
              <button onClick={onButtonClick}>Download CV</button>
            </div>
          </div>
        )}
      </div>
      {/* Renderiza o menu fora do header */}
      {menuOpen && (
        <HamburgerMenu  close={closeMenu}/>
      )}
    </>
  );
}
