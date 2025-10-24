"use client";
import { useEffect, useState } from "react";
import "./scroll.scss";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const wrapper = document.querySelector(".scroll-wrapper");
    let animationFrameId;

    const handleScroll = () => {
      const scrollTop = wrapper.scrollTop;
      const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setScroll(scrolled);
      });
    };

    wrapper.addEventListener("scroll", handleScroll);
    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ height: `${scroll}%` }}></div>
    </div>
  );
}