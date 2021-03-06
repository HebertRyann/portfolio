import { AnimateSharedLayout, MotionValue, useAnimation, useElementScroll, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { LightTheme } from '../../styles/stylesConfig';
import { useContainer } from '../Containers/useContext';
import {
  Container,
  Title,
  ContentAbout,
  ContainerMySkills,
  Skill,
  ContainerConpetetions,
  Competetion,
  WrapperContentAbout,
  ContainerProfile,
  TitleSkills,
  WrapperContentSkills,
  ContainerSocial,
  ContainerTextAbout,
  ContainerSkills,
  ContentSkills,
  ContainerTools,
} from './styles';

interface pros {
  opacity?: MotionValue;
}


const About: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const { ref, inView } = useInView();
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  });
 
  const opacityDesktop = useTransform(
    scrollYProgress,
    [0.17,0.4,0.8, 1],
    [0, 1,1,0]
  );
  const opacityMobile = useTransform(
    scrollYProgress,
    [0,0.7,0.75,0.8],
    [1,1,1,0]
  );

  const translateX = useTransform(
    scrollYProgress,
    [0.17,0.4, 0.75, 0.95],
    [-500,0, 0, -500]
  );

  return (
    <Container 
    style={{ 
      opacity: isMobile ? opacityMobile : opacityDesktop, 
      translateX: isMobile ? 0 : translateX 
    }} 
    ref={ref}>

      <Title 
        animate={inView ? 'visible' : 'hidden'}
        initial='hidden'
        variants={{
          'visible': {
            translateX: 0,
            transition: {
              type: 'spring',
              duration: 0.3,
              bounce: 0.3,
            }
          },
          'hidden': {
            translateX: -500,
          },
        }}
      >
        <h1>Sobre</h1>
      </Title>

      <AnimateSharedLayout>
      <WrapperContentAbout  animate={inView ? 'visible' : 'hidden'}
        initial='hidden'
        variants={{
          'visible': {
            translateX: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 1,
              delay: 0.7,
              bounce: 0.3,
            }
          },
          'hidden': {
            opacity: 0,
            translateX: '-100vw',
          },
        }}>

        <ContainerProfile>
            <div className="ContainerProfileImage" >
                <img 
                  src="/portfolio/assets/IMG_20210304_191508485.jpg"
                  width={400}
                  height={400}
                />
            </div>

            <ContainerSocial>
              <a href="https://github.com/HebertRyann?tab=repositories" target="_blank">
                <FaGithub size={36} color="var(--color-secundary)"/>
              </a>
              <a href="https://www.linkedin.com/in/hebertryansantos/" target="_blank">
                <FaLinkedinIn size={36} color="var(--color-secundary)"/>
              </a>
            </ContainerSocial>

          </ContainerProfile>

        <ContainerTextAbout>
          <p>
            Desde pequeno sempre fui apaixonado por tecnologia, 
            sempre queria criar algo novo, mas com a falta de habilidade,
            eu tive grandes problemas, erros atr??s de erros, mas com muita pesquisa e for??a de vontade, 
            estuda e procura mais informa????es sobre como resolv??-los n??o era tao dif??cil e foi 
            assim que eu comecei a aprender mais sobre tecnologia.
            Terminei de cursa o Bootcamp GoStack da rocketseat, mas o aprendizado
            ?? cont??nuo, agora quero evolui ainda mais e me torna um ??timo profissional.
          </p>
        </ContainerTextAbout>
      </WrapperContentAbout>
      </AnimateSharedLayout>
      
      <ContainerSkills>

        <AnimateSharedLayout>
          <ContentSkills animate={inView ? 'visible' : 'hidden'}
          initial='hidden'
          variants={{
            'visible': {
              translateX: 0,
              transition: {
                duration: 1,
                delay: 1.05,
              }
            },
            'hidden': {
              translateX: '-120%',
            },
          }}>
            <h1>Habilidades</h1>
            <div>
              <p>Responsividade</p>
              <span>
                Traz a melhor experiencia ao usuario em qualquer dispositivos
              </span>
            </div>
            <div>
              <p>Desempenho</p>
              <span>
                Prezo em trazer a melhor performance independende do tamanho do conteudo.
              </span>
            </div>
            <div>
              <p>Intuitivo</p>
              <span>
                Com um design facil, rapido e simples.
                Conseguimos trazer a melhor experiencia e beleza ao usuario.
              </span>
            </div>

          </ContentSkills>
        </AnimateSharedLayout>

        <AnimateSharedLayout >
          <ContainerTools animate={inView ? 'visible' : 'hidden'}
            initial='hidden'
            variants={{
              'visible': {
                translateX: 0,
                transition: {
                  duration: 1,
                  delay: 1.05,
                }
              },
              'hidden': {
                translateX: '150%',
              },
          }}>
            <h1>Ferramentas</h1>
            <div>
              <p>Javascript(Es6+)</p>
              <span>
                ????uma??linguagem??de??programa????o??r??pida??e??flex??vel
              </span>
            </div>
            <div>
              <p>Reactjs</p>
              <span>
              Biblioteca??que??usa??o??javascript??para??trazer??interfaces mais??r??pidas??e??fluidas.
              </span>
            </div>
            <div>
              <p>Nodejs</p>
              <span>
                Biblioteca??que??torna??poss??vel??a cria????o de backends simples aos mais complexos.
              </span>
            </div>
          </ContainerTools>
        </AnimateSharedLayout>
      
      </ContainerSkills>

    </Container>
  )
}

export default About;

