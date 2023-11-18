import React from "react";
import "./Experience.css";
import { FaHtml5 } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCss3 } from "react-icons/fa";  
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const DataExpFront = [
  {
    id: 1,
    skillname: "HTML",
    level: "Experienced",
    icon:<FaHtml5/>,
  },
  {
    id: 2,
    skillname: "CSS",
    level: "Experienced",
    icon:<FaCss3/>,
  },
  {
    id: 3,
    skillname: "Javascript",
    level: "Experienced",
    icon:<IoLogoJavascript/>
  },
  {
    id: 4,
    skillname: "Bootstrap",
    level: "Experienced",
    icon:<FaBootstrap/>,
  },
  {
    id: 5,
    skillname: "React Js",
    level: "Experienced",
    icon:<FaReact/>
  },
  {
    id: 6,
    skillname: "TailWinnd css",
    level: "Experienced",
    icon:<SiTailwindcss/> 
  }
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            {
              DataExpFront.map(({id,skillname,level,icon})=>{
                return(
                <article  key = {id} className="experience__detail">
                 {icon}
                <h4>{skillname}</h4>
                <small className="text-light">{level}</small>
              </article>
              )
              }) 
           
           }
           
          </div>
        </div>

        <div className="experience_backend">
          <h3>backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill />
              <h4>NODE JS</h4>
              
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill />
              <h4>EXPRESS JS</h4>
              
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill />
              <h4>MONGODB</h4>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill />
              <h4>PHP</h4>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill />
              <h4>PYTHON</h4>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill />
              <h4>SQL</h4>
            </article>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Experience;
