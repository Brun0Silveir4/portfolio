import "./Home.scss";

import Header from "../../components/utils/header/Header";
import TextHome from "../../components/utils/text-home/Text-home";
import Technologies from "../../components/utils/technologies/Technologies";

export default function Home() {
  return (
    <div className="home-content">
      <Header />
      <TextHome />
      <Technologies />
    </div>
  );
}
