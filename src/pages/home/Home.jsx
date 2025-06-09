import "./Home.scss";

import Header from "../../components/items/header/Header";
import TextHome from "../../components/items/text-home/Text-home";
import Technologies from "../../components/items/technologies/Technologies";

export default function Home() {
  return (
    <div className="home-content">
      <Header />
      <TextHome />
      <Technologies />
    </div>
  );
}
