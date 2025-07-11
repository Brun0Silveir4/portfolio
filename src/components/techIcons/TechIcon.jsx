// components/TechIcon.jsx
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss } from 'react-icons/si';

const techMap = {
  react: <FaReact size={20} color="#61DBFB" />,
  node: <FaNodeJs size={20} color="#3C873A" />,
  firebase: <SiFirebase size={20} color="#FFCA28" />,
  tailwind: <SiTailwindcss size={20} color="#38BDF8" />,
  orchestrate: <img src="/images/ibm-watsonx--orchestrate.svg" alt="" style={{ width: 20, height: 20, filter: 'invert(1)' }}/>,
  carbon: <img src="/images/carbon.svg" alt="" style={{ width: 20, height: 20, filter: 'invert(1)' }}/>,
  sass: <FaSass size={20} color='#cf649a' />
};

export default function TechIcon({ name }) {
  return techMap[name.toLowerCase()] || null;
}
