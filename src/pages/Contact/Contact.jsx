import "./Contact.scss";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/utils/header/Header";
import { toast, Bounce, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <div className="form-wrapper" data-aos="fade-down" data-aos-duration="1000">
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <h2>Me envie uma mensagem!</h2>

          <div className="input-group">
            <div className="input">
              <label htmlFor="name">
                <p>Name</p>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(formatText(e.target.value))}
                required
              />
            </div>

            <div className="input">
              <label htmlFor="email">
                <p>Email</p>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input">
              <label htmlFor="message">
                <p>Message</p>
              </label>
              <input
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(formatText(e.target.value))}
                required
              />
            </div>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
