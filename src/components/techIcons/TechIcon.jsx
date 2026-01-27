// components/TechIcon.jsx
import { FaReact, FaNodeJs, FaSass, FaDocker } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { SiPostman } from "react-icons/si";



export default function TechIcon({ name }) {
  
  const {theme} = useContext(ThemeContext)
  const techMap = {
    react: <FaReact size={20} color="#61DBFB" />,
    node: <FaNodeJs size={20} color="#3C873A" />,
    firebase: <SiFirebase size={20} color="#FFCA28" />,
    tailwind: <SiTailwindcss size={20} color="#38BDF8" />,
    orchestrate: <img src="/images/ibm-watsonx--orchestrate.svg" alt="" style={{ width: 20, height: 20, filter: theme == 'dark' ? "invert(1)" : "invert(0)" }}/>,
    carbon: <img src="/images/carbon.svg" alt="" style={{ width: 20, height: 20, filter: theme == 'dark' ? "invert(1)" : "invert(0)" }}/>,
    sass: <FaSass size={20} color='#cf649a' />,
    postman: <SiPostman size={20} color='#EF5B25'/>,
    postgres: <BiLogoPostgresql size={20} color='#336791' />,
    docker: <FaDocker size={20} color='#1D63ED' />

  };
  return techMap[name.toLowerCase()] || null;
}
