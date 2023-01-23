import "./App.css";
import Home from "./components/home/home";
import Project from "./components/project/project";
import styled from "styled-components";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Container>
      <Home />
      <Project />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
