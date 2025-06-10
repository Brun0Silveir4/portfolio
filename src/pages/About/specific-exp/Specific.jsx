import "./Specific.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import texts from "../../../assets/Experiences.json";
import Header from "../../../components/items/header/Header";

export default function Specific() {
  const { experience } = useParams();
  const navigate = useNavigate();

  const validIds = texts.map((item) => item.company);

  useEffect(() => {
    if (!validIds.includes(experience)) {
      navigate("/about");
    }
  }, [experience]);

  const exp = texts.find((exp) => exp.company === experience);

  if (!exp) return null;

  return (
    <div>
      <Header />
      {exp.experiences.map((expe, id) => (
        <p key={id}>{expe}</p>
      ))}
    </div>
  );
}
