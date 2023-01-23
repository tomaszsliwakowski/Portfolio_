import React from "react";
import styled from "styled-components";
import prog from "../../assets/prog.gif";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import reactjs from "../../assets/react.svg";
import typescript from "../../assets/typescript.svg";
import redux from "../../assets/redux.svg";
import scss from "../../assets/scss.svg";
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  const importTech = [html, css, javascript, typescript, reactjs, redux, scss];
  return (
    <HomeContainer>
      <h1>Portfolio</h1>
      <ElementContainer>
        <ElementIMG>
          <img src={prog} alt="programing" />
        </ElementIMG>
        <ElementInfo>
          <h3>Front-end Developer</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            officia et quo minima assumenda iure dolore, explicabo
            necessitatibus? Corrupti laudantium explicabo omnis hic, repudiandae
            quam nisi ad minima quae ut.
          </p>
          <ButtonScroll href="#project">
            <AiOutlineArrowDown />
            <p>Projekty</p>
            <AiOutlineArrowDown />
          </ButtonScroll>
        </ElementInfo>
        <ElementTech>
          <ul>
            {importTech.map((item, id) => (
              <li key={id}>
                <img src={item} alt="technology" />
              </li>
            ))}
          </ul>
        </ElementTech>
      </ElementContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(#560bad, #3f37c9);
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  & h1 {
    position: absolute;
    top: 20px;
    color: white;
  }
`;

const ElementContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  min-height: 70vh;
  margin: 120px 0 50px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto auto 1fr;
  }
`;

const ElementIMG = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 60%);
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  @media (max-width: 768px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 2em;
  }
  & img {
    margin: auto;
    max-width: 90%;
    max-height: 90%;
    border-radius: 2em;

    @media (max-width: 768px) {
      max-width: 90%;
      max-height: 350px;
      margin: 16px auto;
    }
  }
`;

const ElementInfo = styled.div`
  background-color: rgba(0, 0, 0, 60%);
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 2em;
  }
  & h3 {
    color: white;
    margin: 100px 0 0 0;
    @media (max-width: 768px) {
      margin: 20px 0 0 0;
    }
  }
  & p {
    color: white;
    padding: 30px;
    text-align: center;
  }
`;

const ElementTech = styled.div`
  background-color: rgba(0, 0, 0, 60%);
  border-radius: 2em;
  display: grid;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-top: 5%;

  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  & ul {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    padding: 0;
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  & li {
    max-height: 80%;
    max-width: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 20px;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 30%);
    }
    @media (max-width: 768px) {
      padding: 20px 0;
    }
  }
  & img {
    max-height: 90%;
    max-width: 70%;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 30%;
    }
  }
`;

const ButtonScroll = styled.a`
  background-color: #4361ee;
  width: 60%;
  height: 40px;
  border-radius: 2em;
  border: 1px solid #4361ee;
  position: absolute;
  bottom: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  cursor: pointer;
  gap: 10px;
  transition: all 0.3s;
  @media (max-width: 370px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    position: relative;
    bottom: 0;
    margin-bottom: 30px;
  }

  &:hover {
    animation-name: none;
    border: 1px solid white;
  }

  & p {
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
  }

  & svg {
    font-size: 24px;
    color: white;
    transition: all 2s;
    margin: 0 20px;
    @media (max-width: 370px) {
      display: none;
    }
  }
  &:hover {
    svg:nth-child(1) {
      transform: rotate(365deg);
    }
    svg:nth-child(3) {
      transform: rotate(-365deg);
    }
  }
`;
