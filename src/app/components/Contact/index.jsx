import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-left">
        <label>What&apos;s your name?</label>
        <input type="text" placeholder="Bob" />

        <label>What&apos;s your email address?</label>
        <input type="email" placeholder="bob@email.com" />

        <label>What do you want to tell me?</label>
        <textarea placeholder="Hi! I just wanted to say hi." />

        <button>Send it to the moon</button>
      </div>

      <div className="contact-right">
        <a href="mailto:olimxcosmo@gmail.com" target="_blank" rel="noreferrer">E-mail</a>
        <a href="https://www.instagram.com/olimxon__313/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.instagram.com/olimxon__313/" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://github.com/olimxon313" target="_blank" rel="noreferrer">Github</a>
      </div>
    </div>
  );
};

export default Contact;
