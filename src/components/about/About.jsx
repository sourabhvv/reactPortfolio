import React, { useState, useEffect } from "react";
import "./About.css";
import star from "../../assets/star-wars.png";

function About() {
  return (
    <section id="about">
      <div className="image-container">
        <img src={star} alt="Star Image" />
      </div>
      <div className="about-text">
        <h5>🎨 Get To Know 🚀</h5>
        <h2>About Me 🖌️💻</h2>
        <p>
          Hello! I'm Sorabh Verma, a passionate 3D artist and full-stack
          engineer 🌟. My journey in the world of art and code has been nothing
          short of an exciting adventure 🎢. As a 3D artist, I bring ideas to
          life in the virtual world, crafting stunning visual experiences that
          captivate and inspire 🎨✨. I love exploring new dimensions, creating
          immersive scenes, and pushing the boundaries of creativity 🌌. When
          I'm not sculpting in the digital realm, you can find me in the world
          of code, where I'm a full-stack engineer 🚀. I enjoy building robust,
          user-friendly web applications and crafting elegant solutions to
          complex problems 💻. Join me on this journey as we merge the worlds of
          art and technology to create magic 🪄✨.
        </p>
      </div>
    </section>
  );
}

export default About;
