import React from "react";
import styled from "styled-components";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import reactjs from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import scss from "../../assets/scss.svg";
import port1 from "../../assets/portfolio1.jpg";
import port2 from "../../assets/portfolio7.jpg";
import port3 from "../../assets/portfolio2.jpg";
import port4 from "../../assets/portfolio4.jpg";
import port5 from "../../assets/portfolio3.jpg";
import port6 from "../../assets/portfolio5.png";
import port7 from "../../assets/portfolio6.jpg";
import port8 from "../../assets/portfolio8.jpg";
import { BsInfoCircle } from "react-icons/bs";
const Project = () => {
  const ProjectData = [
    {
      title: "Shop",
      img: port1,
      desc: "Jest to projekt sklepu internetowego, w którym użyłem Javascript z Reaktem i CSS do stylizacji strony. Użyłem Redux do zarządzania danymi i bazy danych Firebase do uwierzytelniania i przechowywania danych.",
      tech: [html, css, javascript, reactjs, redux],
      github: "https://github.com/tomaszsliwakowski/Shop",
      demo: "https://tomaszsliwakowski.github.io/Shop/",
    },
    {
      title: "FitLifeApp",
      img: port2,
      desc: "Jest to projekt aplikacji wspierającej zdrowy styl życia. Chciałem stworzyć stronę internetową, którą będę mógł wykorzystywać w życiu codziennym.",
      tech: [html, css, javascript, reactjs],
      github: "https://github.com/tomaszsliwakowski/FitLifeApp",
      demo: "https://dazzling-kitsune-605aee.netlify.app/",
    },
    {
      title: "WeatherApp",
      img: port3,
      desc: "Jest to aplikacja pogodowa zbudowana przy użyciu biblioteki React i Api.",
      tech: [html, css, javascript, reactjs],
      github: "https://github.com/tomaszsliwakowski/WeatherApp",
      demo: "https://tomaszsliwakowski.github.io/WeatherApp/",
    },
    {
      title: "FitApp",
      img: port4,
      desc: "Jest to projekt aplikacji wspierającej zdrowy tryb życia. Strona została zbudowana przy użyciu Javascript, HTML, SCSS, CSS.",
      tech: [html, css, javascript, scss],
      github: "https://github.com/tomaszsliwakowski/Shop",
    },
    {
      title: "Calculator",
      img: port5,
      desc: "Jest to prosty kalkulator",
      tech: [html, css, javascript],
      github: "https://github.com/tomaszsliwakowski/Calculator",
      demo: "https://tomaszsliwakowski.github.io/Calculator/",
    },
    {
      title: "Snake",
      img: port6,
      desc: "Gra Snake",
      tech: [html, css, javascript],
      github: "https://github.com/tomaszsliwakowski/snake",
      demo: "https://tomaszsliwakowski.github.io/snake/",
    },
    {
      title: "ToDoList",
      img: port7,
      desc: "Prosta ToDoLista",
      tech: [html, css, javascript],
      github: "https://github.com/tomaszsliwakowski/ToDoList",
      demo: "https://tomaszsliwakowski.github.io/ToDoList/",
    },
    {
      title: "JumpGame",
      img: port8,
      desc: "Gra w której musimy unikać duszka podstakując nad nim",
      tech: [html, css, javascript],
      github: "https://github.com/tomaszsliwakowski/Jump_Game",
      demo: "https://tomaszsliwakowski.github.io/Jump_Game/",
    },
  ];
  return (
    <ProjectContainer>
      <ProjectElementConatiner id="project">
        {ProjectData.map((item, id) => (
          <Element key={id}>
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <div>
              <p>{item.title}</p>
              <span>
                {item?.demo ? (
                  <a href={item.demo} target="_blank">
                    DEMO
                  </a>
                ) : null}
                <a href={item.github} target="_blank">
                  GitHub
                </a>
                <label>
                  <div>
                    <span>{item.desc}</span>
                    <span>
                      {item.tech.map((it, id) => (
                        <img key={id} src={it} alt={item.title} />
                      ))}
                    </span>
                  </div>
                  <BsInfoCircle />
                </label>
              </span>
            </div>
          </Element>
        ))}
      </ProjectElementConatiner>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(#3f37c9, #560bad);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectElementConatiner = styled.ul`
  margin: 100px auto 100px auto;
  padding-top: 50px;
  height: 100%;
  max-width: 1300px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  gap: 50px;
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  }
  @media (min-width: 1200px) {
    gap: 80px;
  }
`;

const Element = styled.li`
  height: 100%;
  max-width: 560px;
  background-color: rgba(0, 0, 0, 40%);
  border-radius: 2em;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: minmax(auto, 250px) auto;
  gap: 20px;
  transition: all 0.3s;
  position: relative;
  z-index: 0;
  &:hover {
    transform: scale(1.02);
  }

  & div:nth-child(1) {
    max-width: 100%;
  }

  & div:nth-child(1) img {
    width: 100%;
    max-height: 250px;
    padding: 20px 20px 0 20px;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
  }
  & div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
    flex-direction: column;
    margin: 0px 20px 20px 20px;
    gap: 40px;
  }
  & div:nth-child(2) span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  & div:nth-child(2) span div {
    display: flex;
    align-items: center;
  }
  & div:nth-child(2) span label {
    height: 30px;
    width: 30px;
  }
  & div:nth-child(2) span label div {
    display: none;
    width: 350px;
    height: 320px;
    background-color: black;
    position: absolute;
    top: 0px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    left: 0%;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    align-items: flex-end;
  }
  & div:nth-child(2) span label:hover {
    div {
      display: grid;
    }
  }
  & div:nth-child(2) span label div span {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }
  & div:nth-child(2) span label div span:nth-child(1) {
    padding: 5px 40px;
    text-align: center;
    position: relative;
    top: -20px;
    color: white;
  }
  & div:nth-child(2) span label div span:nth-child(2) {
    display: flex;
    gap: 12px;
    position: relative;
    top: -20px;
  }
  & div:nth-child(2) span label div span:nth-child(2) img {
    max-width: 100px;
    padding: 0;
    border-radius: 0;
    max-height: 50px;
  }

  & div:nth-child(2) span a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    border: 2px solid #560bad;
    padding: 5px 20px;
    border-radius: 2em;
    cursor: pointer;
  }
  & div:nth-child(2) span a:hover {
    background-color: #560bad;
  }
  & div:nth-child(2) span svg {
    color: white;
    font-size: 30px;
    cursor: help;
    background-color: purple;
    border-radius: 2em;
    @media (max-width: 768px) {
      display: none;
    }
  }

  & div:nth-child(2) span svg:hover {
    background-color: #560bad;
  }
  & div:nth-child(2) p {
    font-size: 22px;
    color: white;
  }
`;
