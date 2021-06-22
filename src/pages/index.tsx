import { FaChevronDown, FaGithub, FaHtml5, FaLinkedinIn, FaReact } from "react-icons/fa";
import { DiCss3, DiDatabase, DiDocker, DiGit, DiJavascript, DiJavascript1, DiMongodb, DiMysql, DiNodejs, DiPostgresql, DiReact, DiRedis, DiSqllite } from "react-icons/di";
import Header from "../Components/Header";
import {
  Container,
} from '../styles/Home';
import { LightTheme } from "../styles/stylesConfig";
import { useEffect, useRef, useState } from "react";
import { About } from "../Components/About";

import { Projects } from "../Components/Projects";
import { ContainerOverlay } from "../Components/ContainerOverlay";
import { ContainersWrapper } from '../Components/Containers/ContainersWrapper';
import { ContainerSection } from '../Components/Containers/ContainerSection';
import { useElementScroll, useTransform, useViewportScroll, useAnimation, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import React from "react";
import { ReactNode } from "react";
import { Profile } from "../Components/Profile";
// import dynamic from 'next/dynamic';
import FormAnimated from "../Components/FormAnimated";


const Home: React.FC = () => {
  const [visibleAbout, setVisibleAbout] = useState(false);

  const handleHover = () => {
    setVisibleAbout(!visibleAbout);
  };


  return (
    <Container >

      {/* <ContainersWrapper>
        <div> 
              <ContainerSection
                key="main"
                containerName="main"
                overlayNode={ 
                  <ContainerOverlay>
                    <ContainerProfile>
                      <WrapperContentProfile>
                        <ImageContainer/>
                        <ContainerText>
                          <h1>Hebert Ryan</h1>
                          <span>Desenvolvedor Fullstack</span>
                          <p>
                            Com foco em trazer a melhor experiencia ao usuario,
                            performatica e responsiva
                          </p>
                        </ContainerText>
                        <ContainerButtons>
                          <button>Curriculo</button>
                          <button>Projetos</button>
                        </ContainerButtons>
                      </WrapperContentProfile>
                      <ContainerNextPage>
                        <FaChevronDown size={56} color={details2}/>
                      </ContainerNextPage>
                    </ContainerProfile>
                  </ContainerOverlay>
                }
              />


              <ContainerSection
                key="about"
                containerName="about"
                overlayNode={ 
                  <ContainerOverlay>
                    <About/>
                  </ContainerOverlay>
                }
              />

              <ContainerSection
                key="projects"
                containerName="projects"
                overlayNode={ 
                  <ContainerOverlay>
                    <Projects />
                  </ContainerOverlay>
                }
              />
        </div>

      </ContainersWrapper> */}

      {/* <About style={opacity}/>
      <Projects style={opacity}/> */}

      <Header/>

      <Profile/>
      <About/>
      <Projects/>
      <FormAnimated/>
      
    </Container>
  )
}

export default Home;
