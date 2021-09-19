import "./App.css";
import './index.css';
import { useEffect } from "react";
import Profile from "./images/Deepak.JPG";
import anime from "animejs/lib/anime.es.js";

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";
function App() {
  let section;
  let width;
  const Animate = () => {
    anime({
      targets: ".bubble1",
      translateX: width < 600 ? "-25px" : "-50px",
      translateY: width < 600 ? "40px" : "50px",
    });
    anime({
      targets: ".bubble2",
      translateX: width < 600 ? "-90px" : "-150px",
      translateY: width < 600 ? "120px" : "160px",
    });
    anime({
      targets: ".bubble3",
      translateX: width < 600 ? "25px" : "50px",
      translateY: width < 600 ? "-40px" : "-50px",
    });
    anime({
      targets: ".bubble4",
      translateX: width < 600 ? "90" : "150px",
      translateY: width < 600 ? "-60" : "-120px",
    });
  };
  const getWidth = () => {
    section = document.querySelectorAll("section");
    width = section[0].offsetWidth;
    console.log(width);
  };
  window.addEventListener("resize", function (event) {
    getWidth();

    Animate();
    section = document.querySelectorAll("section");
    width = section[0].offsetWidth;
    console.log(width);
  });

  useEffect(() => {
    getWidth();
    Animate();
  });
  const Header = () => {
    const homeSection = useScrollSection("home");
    const aboutSection = useScrollSection("about");
    const contactSection = useScrollSection("contact");
    return (
      <header className="grid-cols-3 grid p-2 pb-3">
        <div
          onClick={aboutSection.onClick}
          selected={aboutSection.selected}
          className="text-left text-lg font-bold"
        >
          About
        </div>
        <div
          onClick={homeSection.onClick}
          selected={homeSection.selected}
          className="text-center  text-lg font-bold"
        >
          Portfolio
        </div>
        <div
          onClick={contactSection.onClick}
          selected={contactSection.selected}
          className="text-right  text-lg font-bold"
        >
          Contact
        </div>
      </header>
    );
  };
  return (
    <ScrollingProvider>
      <div className="App ">
        <Section id="home" className="relative">
          <div className="container rounded-full h-10 w-10 bg-blue-700 right-0 absolute bubble1"></div>
          <div className="container rounded-full h-10 w-10 bg-blue-700 right-0 absolute bubble2"></div>
          <Header />
          <div className="grid grid-cols-1 p-5">
            {" "}
            <p className=" text-center md:text-8xl tracking-wide text-7xl">
              Deepak kumar
            </p>
            <p className="text-center md:text-4xl tracking-wide text-2xl">
              Website/Flutter Developer
            </p>
          </div>
          <div className="container flex justify-center  md:h-80 h-72 rounded-full min-w-full p-2">
            <img
              src={Profile}
              alt="profileimage"
              srcSet=""
              className="rounded-full  "
            />
          </div>
          <div className="container rounded-full h-10 w-10 bg-blue-700  absolute bubble3 bottom-0"></div>
          <div className="container rounded-full h-10 w-10 bg-blue-700  absolute bubble4 bottom-14"></div>
        </Section>
        <Section id="about">ABOUT ME</Section>
        <Section id="contact">contact </Section>

      </div>
    </ScrollingProvider>
  );
}

export default App;
