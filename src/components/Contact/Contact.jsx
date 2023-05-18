import React from "react";
import "./contact.css";
import { BsFacebook, BsEnvelopePaper } from "react-icons/bs";

function Contact() {
  return (
    <section className="footer">
      <article className="footer-box">
        <h4>Contact Me</h4>
        <h5>Wynson Carl Nacalaban</h5>
        <div className="icon-wrapper">
          <a href="https://m.me/wynson30" target="_blank">
            <BsFacebook />
          </a>
          <a href="mailto:wynsonnacalaban30@gmail.com" target="_blank">
            <BsEnvelopePaper />
          </a>
        </div>
        <p>+6390 7874 3999</p>
        <div className="footer__copyright">
          <small>&copy; Designed & Built by Wynson Nacalaban</small>
        </div>
      </article>
    </section>
  );
}

export default Contact;
