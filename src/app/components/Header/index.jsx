"use client";
import { useState } from "react";
import Image from "next/image";
import "./header.scss";
import me from "./me.png"; // изображение лежит рядом

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      {/* ======== Верхний хедер ======== */}
      <div className="header">
        <div className="logo" onClick={closeMenu}>
          Axmatov Olimxon
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              document
                .querySelector("#home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>

          <a href="#" onClick={closeMenu}>
            Portfolio
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </nav>

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* ======== Hero секция ======== */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h2 className="welcome">Welcome</h2>
          <h1 className="name">
            I&apos;m Axmatov <br /> <div className="span-1">Olimxon</div>
          </h1>
          <h3 className="role">Fullstack Developer</h3>

          <button
            className="download-btn"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv.pdf"; // файл должен лежать в public/cv.pdf
              link.download = "Axmatov_Olimxon_CV.pdf";
              link.click();
            }}
          >
            Download CV
          </button>
        </div>

        <div className="hero-image">
          <Image
            src={me}
            alt="Axmatov Olimxon"
            width={400} // можно изменить
            height={400} // можно изменить
            priority // загружает первым
          />
        </div>
      </section>
    </header>
  );
}
