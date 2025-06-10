import foto from "../../../../public/images/segunda-img-me.png";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import "./AboutContent.scss"

export default function AboutContent() {
    useEffect(() => {
  AOS.init();
}, []);
  return (
    <div className="infos">
      <div className="title" data-aos="fade-left" data-aos-duration="1000">
        <p>Sobre Mim</p>
      </div>
      <div className="main-content-about">
        <div className="image" data-aos="fade-right" data-aos-duration="1100">
          <img src={foto} alt="" className="main-photo" />
        </div>
        <div className="intro-about">
          <div
            className="title-about"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <p>Minha trajetória</p>
          </div>
          <div
            className="text-about"
            data-aos="fade-left"
            data-aos-duration="1300"
          >
            <p>
              Sou completamente apaixonado por tecnologia e em resolver
              problemas com ela. Me especializei em desenvolvimento web (tendo
              como minhas principais tecnologias React e NodeJS), mas me adapto
              a qualquer tecnologia dependendo do que o projeto que estou
              trabalhando precisar.
            </p>
            <p>
              Minha trajetória no ramo de tecnologia começou desde quando eu era
              criança. Sempre buscava aprender sozinho coisas novas e entender
              como um computador funcionava. Decidi que queria seguir isso como
              minha profissão mais ou menos no ano de 2019, quando prestei
              vestibulinho para a Etec da Zona Leste e passei como um dos
              primeiros colocados. Mesmo com todos os desafios durante o período
              da pandemia, que foi no começo do meu Ensino Médio, sempre busquei
              aprender mais e mais.
            </p>
            <p>
              O grande projeto que participei foi o meu TCC: um projeto para
              auxiliar as pessoas com skincare. Participei desde a pesquisa de
              campo, sendo elas propriamente pesquisas ou pequenas entrevistas
              com dermatologistas; colaboração com o design do projeto e
              participação ativa no desenvolvimento da aplicação, que gerava um
              cronograma de skincare baseado em cada usuário, proporcionando uma
              experiência única para cada pessoa.
            </p>
            <p>
              Após o Ensino Médio (2023), ingressei na Fatec da Zona Leste por
              meio do programa AMS (Articulado Médio Superior) com apoio do
              programa P-TECH feito pela IBM. No meio do mesmo ano, consegui um
              estágio na IBM. Durante o período de estágio, aprimorei minhas
              habilidades tanto de código quanto de comunicação e colaboração em
              equipe. Tive a oportunidade de trabalhar em diversos projetos para
              clientes extremamente importantes para a empresa.
            </p>
            <p>
              Desde então, minha prioridade tem sido evoluir constantemente como
              desenvolvedor. Busco sempre aprender coisas novas, aprimorar
              minhas habilidades e estar por dentro das tendências do mercado.
              Gosto de encarar desafios, entender os problemas a fundo e
              encontrar soluções que façam sentido de verdade. Acredito que
              desenvolvimento vai muito além de escrever código — envolve
              empatia, colaboração e a vontade de entregar algo que realmente
              gere impacto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
