// components/Project.jsx
import TechIcon from "../techIcons/TechIcon";
import "./Project.scss";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";

export default function Project({
  title,
  description,
  image,
  techs,
  clicable,
  liveLink,
  repo,
}) {
  const handleClick = () => {
    if (clicable) {
      window.open(liveLink, "_blank");
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`project ${clicable && isHovered ? "hovered" : ""}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: clicable ? "pointer" : "default" }}
    >
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="texts">
        <div className="titles">
          <div className="title">{title}</div>
          <div className="techs">
            {techs.map((tech, index) => (
              <TechIcon key={index} name={tech} />
            ))}
          </div>
        </div>
        <div className="desc">
          <p>{description}</p>
        </div>
        {clicable && (
          <div className="links">
            <a href={liveLink} target="_blank" onClick={(e) => e.stopPropagation()}>
              <LiaExternalLinkAltSolid size={30} />
            </a>
            <a href={repo} target="_blank" onClick={(e) => e.stopPropagation()}>
              <FiGithub size={28} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
