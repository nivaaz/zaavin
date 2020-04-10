import React from "react";
import styles from "./welcome.module.css";
import Nivaazdrawing from "../../images/Nivaazdrawing.svg";
const Welcome = () => (
  <div className={styles.welcome}>
    <div>
    <h1 className={styles.title}> Hi, I'm Nivaaz </h1>
    <h2>
      {" "}
      Nivaaz is an electrical engineer turned software engineer and
      entrepreneur.{" "}
    </h2>
    <p>
      She's the best know for her ability to conquer her goals despite the odds
      stacked up against her. Last year alone, she interned at an engineering
      consultancy, trading company and Australia's biggest unicorn tech startup.
      All while doing her honours thesis in quantum engineering and building her
      startup (Sukara Engineering).
    </p>
    <p>
      As a self-taught developer, she has experience in System Verilog (FPGA
      development) in high-speed trading & quantum engineering, as well as,
      (ReactJS, jQuery, Typescript, HTML, CSS, NodeJS) in the tech startup
      space.
    </p>
    <p>
      In her spare time, you'll find her writing about her experiences and
      learnings on Medium, prototyping designs for products on Figma & Codepen,
      and painting or trying to pat all the dogs in Sydney. 🐕🐕‍🦺🐩
    </p>
    </div>
    <div className={styles.drawing}>
        <img src={Nivaazdrawing} className={styles.nivaazimage}/>
    </div>
  </div>
)

export default Welcome
