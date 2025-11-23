import Cover from "./Cover";
import Aboutme from "./Aboutme/Aboutme";
import AboutmeQnA from "./Aboutme/AboutmeQnA";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import CloneCoding from "./Clone/CloneCoding";
import Close from "./Close";
import Practical from "./Practical/Practical";
import { useEffect } from "react";

const MainPage = ({ scrollTarget }) => {

  useEffect(() => {
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTarget]);

  return (
    <div className="mainpage">
      <div id="home">
        <Cover />
      </div>
      <div id="aboutme">
        <Aboutme />
        <AboutmeQnA />
        <Skills />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="clone">
        <CloneCoding />
      </div>
      <div id="practical">
        <Practical />
      </div>
      <Close />
    </div>
  );
};

export default MainPage;