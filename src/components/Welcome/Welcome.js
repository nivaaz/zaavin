import React from "react";
import styles from "./welcome.module.css";

const Welcome = () => (
  <div className={styles.welcome}>
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

    <h3 className={styles.you}> So, tell me about you </h3>
    <p>
      {" "}
      Are you interested in design? Omg me too! I love creating product protypes
      on [figma]
    </p>
    <p>
      {" "}
      You're more of a css person? Love that! [Codepen] is my goto when I wanna
      be creative?
    </p>
    <p>
      {" "}
      Oh well, I've got some cool programming projects. Wanna check them out
      here?
    </p>

    <p>
      OOOO Do you like puppies?You have to check out my dog Rubi on Instagram
    </p>
  </div>
)

export default Welcome
