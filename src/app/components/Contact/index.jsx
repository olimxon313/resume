"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6lhmhe8", // 🔹 Твой Service ID
        "template_c366onb", // ⚠️ Замени на свой Template ID из EmailJS
        form.current,
        "r8evXEEWhdSoUDGXi" // ⚠️ Замени на свой Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-left">
        <label>What&apos;s your name?</label>
        <input type="text" name="user_name" placeholder="Bob" required />

        <label>What&apos;s your email address?</label>
        <input
          type="email"
          name="user_email"
          placeholder="bob@email.com"
          required
        />

        <label>What do you want to tell me?</label>
        <textarea
          name="message"
          placeholder="Hi! I just wanted to say hi."
          required
        />

        <button type="submit">Send it to the moon</button>
      </form>

      <div className="contact-right">
        <a href="mailto:olimxcosmo@gmail.com" target="_blank" rel="noreferrer">
          E-mail
        </a>
        <a
          href="https://www.instagram.com/olimxon__313/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com/olimxon__313/"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://github.com/olimxon313"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Contact;
