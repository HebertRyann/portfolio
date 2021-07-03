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
    [0.17,0.4,0.7, 0.8],
    [0, 1,1,0]
  );

  const translateX = useTransform(
    scrollYProgress,
    [0.17,0.4, 0.75, 0.95],
    [-500,0, 0, -500]
  );

  useEffect(() => {
    console.log(scrollYProgress)
  }, [scrollYProgress]);


  return (
    <Container style={{ opacity: isMobile ? opacityMobile : opacityDesktop, translateX }} ref={ref}>

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
            sempre queria criar alguma coisa nova, mas com a falta de habilidade,
            vinha grandes problemas, erros atras de erros, mas com o google e 
            uma grande força de vontande ao meu lado, 
            estuda e procura mais informaçoes sobre como resolvelos nao era tao dificl e foi 
            assim que eu comeicei a apreder mais sobre tecnologia.
            Terminei de cursas o Bootcamp GoStack da rocketseat, mas o apredizado
            e continuo, e agora quero evolui ainda mais e me torna um otimo profissional.
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

