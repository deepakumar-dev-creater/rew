import "./App.css";
import "./index.css";
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
        <hr />
        <Section id="about">
          <p className="text-center md:text-8xl tracking-wide text-7xl">
            About Me,
          </p>
          <div className="container card flex text-center mx-auto">
            Iam deepak kumar able to create intersting and creative web projects
            with good ui and ux .I started learning web devleopment on my own at
            the age of 17 so i can faced many difficulty and obstacles.I am now
            speciallized in fix frontend issues and also cable of cloning a ui
            from scrach As the world come in handy on a smartphone so learned
            flutter development for cross site devlopment.backend devlopment I
            know web framework like laravel,django using one of these created
            rest api.My hobbies are learning or getting information of some new
            technologhy by a computer surfing then finnaly is to keep our body
            fit..
          </div>
        </Section>
        <hr />
        <Section id="education">
          <p className="text-center md:text-8xl tracking-wide text-7xl">
            Education
          </p>
          <div className="container grid grid-cols-2 min-w-full space-y-5">
            <div className="col-span-2">
              <div className="container flex flex-col  items-center m-auto">
                <div className="card m-auto p-5 w-48 md:w-96">
                  <div className="text-center">
                    Jeppiaar Engineering College
                  </div>
                  <div className="text-center">
                    B.Tech Information Technology
                  </div>
                  <div className="text-center">2018-2022</div>
                </div>
              </div>
            </div>
            <div className="card w-48 md:w-96 m-auto p-5">
              <div>Sir Siva Swami Kalalaya Senior Secondary School</div>
              <div className="text-center">HSC</div>
              <div className="text-center">2017-2018</div>
              <div className="text-center">84%</div>
            </div>

            <div className="card md:w-96 m-auto w-48 p-5">
              <div className="text-center">Montfort Academy</div>
              <div className="text-center">SSLC</div>
              <div className="text-center">2015-2016</div>
              <div className="text-center">89%</div>
            </div>
          </div>
        </Section>
        <hr />
        <Section id="skills">
          <p className="text-center md:text-8xl tracking-wide text-7xl">
            Skill
          </p>
          <div className="container grid md:grid-cols-2 grid-cols-1 min-w-full md:space-y-10 space-y-5">
            <div className="grid grid-cols-2"><div>python</div></div>
            <div></div>
          </div>
        </Section>
        <Section id="contact">contact </Section>
      </div>
    </ScrollingProvider>
  );
}

export default App;
