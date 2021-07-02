import Header from "../Components/Header";
import {
  Container,
} from '../styles/Home';
import { useRef } from "react";
import { About } from "../Components/About";

import { Projects } from "../Components/Projects";
import React from "react";
import { Profile } from "../Components/Profile";
import { Footer } from "../Components/Footer";


const Home: React.FC = () => {
  const projectRef = useRef<HTMLDivElement>(null);

  const handleToProject = () => {
    projectRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  };


  return (
    <Container >
      <Header/>
      <Profile handleScroll={handleToProject}/>
      <About/>
      <Projects refContainer={projectRef}/>
      <Footer/>
    </Container>
  )
}

export default Home;
