import { useState, useEffect } from "react";
import "./Header.scss";
import { LuMoon } from "react-icons/lu";
import CV from "../../../public/docs/CV-Bruno-Silveira-Dionisio.pdf"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onButtonClick = () => {
    fetch(teste).then((response) => {
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
          <p>Sobre</p>
          <p>Projetos</p>
          <p>Contato</p>
        </div>
        <div className="btn-group">
          <LuMoon size={24} className="icon" />
          <button onClick={onButtonClick}>Download CV</button>
        </div>
      </div>
    </div>
  );
}
