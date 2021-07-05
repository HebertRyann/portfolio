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

  useEffect(() => {
    console.log(scrollYProgress)
    console.log(isMobile)
  }, [isMobile]);


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
              <FaGithub size={36} color="var(--color-secundary)"/>
              <FaLinkedinIn size={36} color="var(--color-secundary)"/>
            </ContainerSocial>

          </ContainerProfile>

        <ContainerTextAbout>
          <p>
            Desde pequeno sempre fui apaixonado por tecnologia, 
            sempre queria criar algo novo, mas com a falta de habilidade,
            vinham grandes problemas, erros atrás de erros, mas com muita pesquisa e 
            uma grande força de vontade, 
            estuda e procura mais informações sobre como resolvê-los não era tao difícil e foi 
            assim que eu comecei a aprender mais sobre tecnologia.
            Terminei de cursa o Bootcamp GoStack da rocketseat, mas o aprendizado
            e continuo, e agora quero evolui ainda mais e me torna um ótimo profissional.
          </p>
          {/* <ContainerMySkills>
            <TitleSkills>
              <strong>Ferramentas</strong>
            </TitleSkills>            
            <div>
              <span>---- Front end:</span>
              <p>
                Html5, Css3, Javascript, React, Nextjs, Typescript
              </p>
            </div>
            <span>Back end:</span>
            <p>
              Nodejs, Postgres, MySql, NoSql, Mongo, TypeOrm, docker
            </p>
          </ContainerMySkills> */}
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
                A resposividade ajuda a trazer a mekhir expericia ao usuario em qual
                querl plataforma
              </span>
            </div>
            <div>
              <p>Responsividade</p>
              <span>
                A resposividade ajuda a trazer a mekhir expericia ao usuario em qual
                querl plataforma
              </span>
            </div>
            <div>
              <p>Responsividade</p>
              <span>
                A resposividade ajuda a trazer a mekhir expericia ao usuario em qual
                querl plataforma
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
                translateX: '120%',
              },
          }}>
            <h1>Ferramentas</h1>
            <div>
              <p>Javascript(Es6+)</p>
              <span>
                A resposividade ajuda a trazer a mekhir expericia ao usuario em qual
                querl plataforma
              </span>
            </div>
            <div>
              <p>Javascript(Es6+)</p>
              <span>
                A resposividade ajuda a trazer a mekhir expericia ao usuario em qual
                querl plataforma
              </span>
            </div>
            <div>
              <p>Javascript(Es6+)</p>
              <span>
                A resposividade ajuda a trazer a mekhir expericia ao usuario em qual
                querl plataforma
              </span>
            </div>
          </ContainerTools>
        </AnimateSharedLayout>
      
      </ContainerSkills>

    </Container>
  )
}

export { About };

