import "./Technologies.scss";
import Tech from "../../tech/Tech";
import IbmCloudIcon from '../../../assets/ibm-cloud.svg';
import codeEngine from "../../../assets/ibm-cloud--code-engine.svg";
import DB2 from "../../../assets/ibm--db2.svg"
import twillio from "../../../assets/twilio-icon.svg"
import { useEffect, useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import AOS from "aos";
import 'aos/dist/aos.css'


export default function Technologies() {
  useEffect(() => {
    AOS.init();
  }, []);

  const {theme} = useContext(ThemeContext)

  return (
    <div className="technologies">
      <div className="title" data-aos="fade-down" data-aos-duration="1000">
        <p>Tecnologias</p>
      </div>
      <div className="tech-group" data-aos="fade-right" data-aos-duration="1100">
        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} text={"HTML 5"} doc={"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} text={"CSS3"} doc={"https://developer.mozilla.org/pt-BR/docs/Web/CSS"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} text={"Javascript"} doc={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"}/>
        
        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} text={"Typescript"} doc={"https://www.typescriptlang.org/docs/"}/>
        
        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"} text={"React"} doc={"https://react.dev"}/>
        
        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"} text={"Next.js"} doc={"https://nextjs.org"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"} text={"Bootstrap"} doc={"https://getbootstrap.com"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"} text={"Tailwind"} doc={"https://tailwindcss.com"}/>
        
        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"} text={"Sass/Scss"} doc={"https://sass-lang.com"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"} text={"Python"} doc={"https://docs.python.org/3/"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"} text={"Laravel"} doc={"https://laravel.com/"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"} text={"Node.js"} doc={"https://nodejs.org/docs/latest/api/"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"} text={"Express"} style={{ filter: theme == 'dark' ? "invert(1)" : "invert(0)"  }} doc={"https://expressjs.com/pt-br/"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"} text={"Axios"} doc={"https://axios-http.com/ptbr/docs/intro"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg"} text={"Sequelize"} doc={"https://sequelize.org"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"} text={"Firebase"} doc={"https://firebase.google.com"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"} text={"MongoDB"} doc={"https://www.mongodb.com"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"} text={"MySQL"} doc={"https://dev.mysql.com/doc/"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"} text={"PostgreSQL"} doc={"https://www.postgresql.org"}/>

        <Tech url={DB2} text={"DB2"} style={{ filter: theme == 'dark' ? "invert(1)" : "invert(0)" }} doc={"https://www.ibm.com/support/pages/db2-database-product-documentation"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"} text={"GIT"} doc={"https://git-scm.com/doc"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg"} text={"openAPI"} doc={"https://swagger.io/specification/"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"} text={"Postman"} doc={"https://www.postman.com"}/>
        
        <Tech url={codeEngine} text={"Code Engine"} style={{ filter: theme == 'dark' ? "invert(1)" : "invert(0)"  }} doc={"https://www.ibm.com/br-pt/products/code-engine"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"} text={"Swagger"} doc={"https://swagger.io"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"} text={"Vite"} doc={"https://vite.dev"}/>

        <Tech url={twillio} text={"Twilio"} doc={"https://www.twilio.com/pt-br"}/>

        <Tech url={IbmCloudIcon} text={"IBM cloud"} style={{ filter: theme == 'dark' ? "invert(1)" : "invert(0)"  }} doc={"https://cloud.ibm.com/docs"}/>

      </div>
    </div>
  );
}