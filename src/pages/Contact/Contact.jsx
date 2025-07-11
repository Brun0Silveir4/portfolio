import "./Contact.scss";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/utils/header/Header";
import { toast, Bounce, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import Input from "../../components/input/input";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCESS");
          notifySucess();
        },
        (error) => {
          console.log("erro", error.text);
          notifyError();
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };
  const notifySucess = () => {
    toast.success("Mensagem enviada com sucesso!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  };

  const notifyError = () => {
    toast.error("Ocorreu um erro ao enviar sua mensagem!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const formatText = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="contact-container">
      <Header />
      <div
        className="contact-content"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="contact-title">
          <p>Entre em contato!</p>
        </div>
        <div className="form-wrapper">
          <form ref={form} onSubmit={sendEmail} className="form-content">
            <h2>Entre em contato por email!</h2>

            <div className="input-group">
              <Input
                htmlFor={"name"}
                title={"Name"}
                type={"text"}
                name={"name"}
                id={"name"}
                value={name}
                onChange={(e) => setName(formatText(e.target.value))}
              />

              <Input
                htmlFor={"email"}
                title={"Email"}
                type={"text"}
                name={"email"}
                id={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                htmlFor={"message"}
                title={"Mensagem"}
                type={"text"}
                id={"message"}
                name={"message"}
                value={message}
                onChange={(e) => setMessage(formatText(e.target.value))}
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-media">
          <div className="media-title">
            <p>Ou me chame por uma de minhas outras redes!</p>
          </div>

          <div className="email">
            <a href="mailto:bruno.silveira.dionisio@gmail.com">
            <MdEmail size={20} />
              <p>bruno.silveira.dionisio@gmail.com</p>
            </a>
          </div>

          <div className="media-links">
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
      </div>
    </div>
  );
}
