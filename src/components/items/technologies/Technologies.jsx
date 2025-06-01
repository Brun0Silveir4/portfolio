import "./Technologies.scss";
import Tech from "../../tech/Tech";
import ibmCloud from "../../../../public/images/ibm-cloud.svg";
import codeEngine from "../../../../public/images/ibm-cloud--code-engine.svg";

export default function Technologies() {
  return (
    <div className="technologies">
      <div className="title">
        <p>Tecnologias</p>
      </div>
      <div className="tech-group">
        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} text={"HTML 5"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} text={"CSS3"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} text={"Javascript"}/>
        
        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} text={"Typescript"}/>
        
        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"} text={"React"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"} text={"Bootstrap"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"} text={"Tailwind"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"} text={"Kotlin"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"} text={"Next.js"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"} text={"Node.js"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"} text={"Express"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"} text={"Axios"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg"} text={"Sequelize"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"} text={"Sass/Scss"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"} text={"Firebase"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"} text={"MongoDB"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"} text={"MySQL"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"} text={"PostgreSQL"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"} text={"GIT"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg"} text={"openAPI"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"} text={"Postman"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"} text={"Swagger"}/>

        <Tech url={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"} text={"Vite"}/>

        <Tech url={ibmCloud} text={"IBM cloud"}/>

        <Tech url={codeEngine} text={"Code Engine"}/>

      </div>
    </div>
  );
}
