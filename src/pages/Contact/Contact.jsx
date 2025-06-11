import "./Contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/utils/header/Header";

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
        () => console.log("SUCESS"),
        (error) => console.log("erro", error.text)
      );

      setName('')
      setEmail('')
      setMessage('')
  };

  const formatText = (text) => {
    if(!text) return ''
    return text.charAt(0).toUpperCase() + text.slice(1)

  }

  return (
    <div className="contact-container">
      <Header />
      <div className="form-wrapper">
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <h2>Me contate!</h2>

          <div className="input-group">
            <div className="input">
              <label htmlFor="name">
                <p>Name</p>
              </label>
              <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(formatText(e.target.value))}/>
            </div>

            <div className="input">
              <label htmlFor="email">
                <p>Email</p>
              </label>
              <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="input">
              <label htmlFor="message">
                <p>Message</p>
              </label>
              <input type="text" name="message" id="message" required value={message} onChange={(e) => setMessage(formatText(e.target.value))}/>
            </div>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
