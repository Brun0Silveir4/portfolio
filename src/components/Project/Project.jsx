// components/Project.jsx
import TechIcon from "../techIcons/TechIcon";
import "./Project.scss";

export default function Project({ title, description, image, techs }) {
  return (
    <div className="project">
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
        <div className="desc">{description}</div>
      </div>
    </div>
  );
}
