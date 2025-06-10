import "./Specific.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import texts from "../../assets/Experiences.json";
import Header from "../../components/utils/header/Header";
import { BiArrowBack } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-specific">
      <Header />
      <div className="data-specific">
        <div className="back" data-aos="fade-right" data-aos-duration="1000">
          <BiArrowBack
            size={25}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/about")}
          />
        </div>
        <div
          className="title-specific"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p>{exp.company.toUpperCase()}</p>
        </div>
        <div className="main-content-specific">
          <div
            className="image-specific"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            <img src={exp.url_image} alt="" className="img-card" />
          </div>
          <div className="resume" data-aos="fade-left" data-aos-duration="1300">
            {exp.experiences.map((para, id) => (
              <p key={id}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
