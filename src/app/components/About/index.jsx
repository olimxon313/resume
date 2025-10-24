"use client";
import "./about.scss";
import Image from "next/image";
import dog from "./imgaes/dog.png";
import imgr from "./imgaes/React.svg";
import dota from "./imgaes/dota.svg";
import mefoto from "./imgaes/foto.jpg";
import basketball from "./imgaes/basketball.jpg";
import gym from "./imgaes/gym.jpg";
import vscode from "./imgaes/vscode.jpg";
import { useState, useEffect } from "react";

export default function About() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = ["Young mind", "Fresh POV", "Web Developer", "Always inspired"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [delay, setDelay] = useState(150);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < texts[index].length) {
        setSubIndex((prev) => prev + 1);
        setDelay(50); // скорость печати
      } else if (deleting && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
        setDelay(80); // скорость стирания
      } else if (!deleting && subIndex === texts[index].length) {
        // пауза перед стиранием
        setTimeout(() => setDeleting(true), 1900);
      } else if (deleting && subIndex === 0) {
        // переход к следующему слову
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        setDelay(200);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, delay]);

  return (
    <div className="main-div">
      <h1>Facts about me</h1>

      <div className="div-1">
        <div className="child-div-1">
          I&apos;m from <br /> Uzbekistan
        </div>
        <div className="child-div-2">
          Age: <br />
          <span className="span-1">16</span>
        </div>

        <div className="child-div-3">
          Over <br />
          <span className="span-2">30</span>
          <span>Projects</span>
        </div>

        <div className="child-div-4">
          Coding for: <br /> 2+ years
        </div>

        <div className="child-div-5">
          Dogs &gt; cats <br />
          <Image
            src={dog}
            className="image-dog"
            alt="Axmatov Olimxon"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      <div className="div-2">
        <div className="child-div-6">
          <div className="child-div-13">Enjoying</div>
          <div className="child-div-14">Using</div>
        </div>
        <div className="child-div-7">
          <Image
            src={mefoto}
            alt="Axmatov Olimxon"
            fill
            className="image-olim"
            priority
          />
        </div>
        <div className="child-div-8">Playing</div>
      </div>

      <div className="div-3">
        <div className="child-div-9">
          <span className="typewriter">
            {texts[index].substring(0, subIndex)}
          </span>
        </div>

        <div className="child-div-10">
          <div className="child-div-11">
            <Image
              src={imgr}
              className="image-react"
              alt="Axmatov Olimxon"
              priority
            />
          </div>
          <div className="child-div-12">
            <Image
              src={dota}
              className="image-dota"
              alt="Axmatov Olimxon"
              priority
            />
          </div>
          <div className="child-div-15">
            <span className="glitch-text">???</span>
          </div>
        </div>
      </div>
    </div>
  );
}
