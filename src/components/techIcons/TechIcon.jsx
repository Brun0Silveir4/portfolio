// components/TechIcon.jsx
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss } from 'react-icons/si';

const techMap = {
  react: <FaReact size={20} color="#61DBFB" />,
  node: <FaNodeJs size={20} color="#3C873A" />,
  firebase: <SiFirebase size={20} color="#FFCA28" />,
  tailwind: <SiTailwindcss size={20} color="#38BDF8" />,
};

export default function TechIcon({ name }) {
  return techMap[name.toLowerCase()] || null;
}
