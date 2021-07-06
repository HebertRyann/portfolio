import {
  Container,
} from '../styles/Home';
import { useRef } from "react";
import React from "react";
const About = dynamic(() => import('../Components/About'), { ssr: false});
const Footer = dynamic(() => import('../Components/Footer'), { ssr: false});
const Profile = dynamic(() => import('../Components/Profile'), { ssr: false});
const Projects = dynamic(() => import('../Components/Projects'), { ssr: false});
const Header = dynamic(() => import('../Components/Header'), { ssr: false});
import dynamic from "next/dynamic";


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
