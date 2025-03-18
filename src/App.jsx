import React from "react";
import { BackgroundLines } from "./Components/Ui/Background-lines";
import Container from "./Components/container/Container";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="h-full font-family flex flex-col justify-center items-center w-full relative">
      <BackgroundLines className="absolute" />

      <Container className="relative z-10">
        <Header />
        <Projects/>
        <Skills/>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
