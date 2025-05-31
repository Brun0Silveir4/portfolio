import "./App.scss";
import { useState, useEffect } from "react";

import Header from "../../components/header/Header";

import formalPhoto from "../../../public/images/foto-formal.jpg";

import { IoLocationOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

export default function App() {
  return (
    <div className="home-content">
      <Header />
      <div className="intro">
        <div className="intro-content">
          <div className="text-content">
            <div className="name-bio">
              <div className="title">
                <p>Oi! Meu nome é Bruno!</p>
              </div>
              <div className="resumed-bio">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Adipisci quisquam fuga, animi iusto exercitationem assumenda
                  earum similique nostrum aliquid cum sit necessitatibus
                  consequuntur voluptatum magnam, ipsam temporibus eos iure quam
                  illo veniam, ad odit nihil hic! Suscipit delectus ab mollitia!
                </p>
              </div>
            </div>
            <div className="locale">
              <IoLocationOutline size={24} />
              <p>São Paulo, Brasil</p>
            </div>
            <div className="social-media">
              <a href="https://github.com/Brun0Silveir4" target="_blank">
                <FiGithub className="git" />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-silveira-dionisio/"
                target="_blank"
              >
                <TiSocialLinkedin className="link" />
              </a>
            </div>
          </div>
          <div className="image">
            <img src={formalPhoto} alt="" height={320} width={300} />
            <div className="back-photo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
