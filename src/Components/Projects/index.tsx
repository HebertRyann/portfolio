import { AnimateSharedLayout, MotionValue, useMotionValue, useTransform, useViewportScroll, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaLink } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  TitleProjects,
  Project,
  ContainerImageProject,
  ProjectHeader,
  ContentProjectHeader,
  ContainerDescription,
  ContainerStack,
  ContentStack,
  ContainerButtonProject,
  ContainerScrollCarrousel,
  WrapperContentProject,
} from './styles';
import { Button } from '../Button';

interface pros {
  style?: MotionValue;
}

const propjects = [
  { 
    title: 'BeTheHero', 
    subTitle: 'Plataforma para ongs',
    description: `Uma plataforma onde ongs podem compartilhar suas causas e receber doações, 
    com o aplicativo mobile os usuarios podem fazer o seu cadastro e já podem começar a visualizar
    todas as causas postadas e ajuda-las.`,
    imageBackground: `/portfolio/assets/Captura da Web_5-7-2021_225458_hebertryann.github.io`,
    buttonLink: 'https://hebertryann.github.io/react-gh-pages/#/',
    stacks: ['Reactjs - ', 'Nodejs - ', 'React Native']
  },
  { 
    title: 'GoBarber', 
    subTitle: 'Plataforma para barbearias',
    description: `Uma plataforma onde os barbeiros podem fazer seu cadastro e disponibilizar o seu serviço, 
    os usuarios atraves do aplicativo mobile podem agendar um horario com qualquer um dos
    barbeiros.`,
    imageBackground: `/portfolio/assets/Captura da Web_5-7-2021_22557_hebertryann.github.io`,
    buttonLink: 'https://hebertryann.github.io/gobarberr/',
    stacks: ['Reactjs - ', 'Typescript', 'Nodejs - ', 'React Native']
  },
  { 
    title: 'KabumClone', 
    subTitle: 'E-commerce',
    description: `Website feito com intuito de consolidar meus conhecimentos em nextjs, 
    aprender mais sobre SSR(server-side-rendering) e SEO(search-engine-optmize).
    Refiz o design, e adicionei outras funcionabilidades`,
    imageBackground: `/portfolio/assets//portfolio/assets/Captura da Web_5-7-2021_225458_hebertryann.github.io`,
    buttonLink: 'https://kabum-clone.vercel.app',
    stacks: ['Nextjs - ', 'Typescript']
  },
]

interface ProjectsProps {
  refContainer: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<ProjectsProps> = ({ refContainer }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  })
  const nextProject = () => {
    if(currentIndex === propjects.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1)
  };
  const previousProject = () => {
    setCurrentIndex(currentIndex - 1)
  };
  const { scrollYProgress } = useViewportScroll();
  const { ref, inView } = useInView();


  const opacity = useTransform(
    scrollYProgress,
    [0.60,0.9],
    [0, 1]
  );
  const opacityMobile = useTransform(
    scrollYProgress,
    [0.75,0.8],
    [0,1]
  );

  const translateX = useTransform(
    scrollYProgress,
    [0,1],
    [-500,0]
  );
  const translateXMobile = useTransform(
    scrollYProgress,
    [0,1],
    [-500,0]
  );

  useEffect(() => {
    console.log(isMobile)
  }, [isMobile]);

  return (
    <Container 
    style={{ 
      opacity: isMobile ? opacityMobile : opacity, 
      translateX: isMobile ? 0 : translateX 
    }} 
    ref={ref}>
      <TitleProjects ref={refContainer} animate={inView ? 'visible' : 'hidden'}
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
        }}>
        <h1>Projetos</h1>
      </TitleProjects>

      {propjects.map((project, index) => index === currentIndex && (
        <Project animate={inView ? 'visible' : 'hidden'}
        key={project.title}
        initial='hidden'
        variants={{
          'visible': {
            translateX: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 0.7,
              delay: 0,
              bounce: 0.3,
            }
          },
          'hidden': {
            translateX: '-120vw',
            opacity: 0,
          },
        }}>

        <ContentProjectHeader >
        <AnimateSharedLayout>
          <motion.div
          animate={inView ? 'visible' : 'hidden'}
          initial="hidden" 
          variants={{
          'visible': {
            translateX: 0,
            transition: {
              type: 'spring',
              duration: 0.5,
              bounce: 0.3,
              delay: 0.3,
            }
          },
          'hidden': {
            translateX: '-120vw',
          }}}>
            <FaArrowLeft 
              size={isMobile ? 16 : 40} 
              color="var(--color-secundary)" 
              onClick={previousProject}
              className="ArrowLeft"

            />
          </motion.div>
        </AnimateSharedLayout>

          <WrapperContentProject>
            <AnimateSharedLayout>
              <ProjectHeader animate={inView ? 'visible' : 'hidden'}
                initial='hidden'
                variants={{
                  'visible': {
                    translateX: 0,
                    transition: {
                      type: 'spring',
                      duration: 0.5,
                      bounce: 0.3,
                      delay: 0.3,
                    }
                  },
                  'hidden': {
                    translateX: '-120vw',
                  },
                }}
                >
                <h1>
                  {project.title}
                </h1>
                <h2>{project.subTitle}</h2>
                <ContainerStack>
                  {project.stacks.map(stack => (
                    <span key={stack}>{stack}</span>
                  ))}
                </ContainerStack>
              </ProjectHeader>
            </AnimateSharedLayout>

            <AnimateSharedLayout>
              <ContainerDescription animate={inView ? 'visible' : 'hidden'}
                initial='hidden'
                variants={{
                  'visible': {
                    translateX: 0,
                    transition: {
                      type: 'spring',
                      duration: 0.5,
                      bounce: 0.3,
                      delay: 0.4,
                    }
                  },
                  'hidden': {
                    translateX: '-120vw',
                  },
                }}>
                <p>
                  {project.description}
                </p>
              </ContainerDescription>
            </AnimateSharedLayout>

            <AnimateSharedLayout>
              <ContainerButtonProject animate={inView ? 'visible' : 'hidden'}
                initial='hidden'
                variants={{
                  'visible': {
                    translateX: 0,
                    transition: {
                      type: 'spring',
                      duration: 0.5,
                      bounce: 0.3,
                      delay: 0.6,
                    }
                  },
                  'hidden': {
                    translateX: '-120vw',
                  },
                }}>
                <Button 
                  href={project.buttonLink}
                  target="_blank" content="Visite a Pagina"
                />
              </ContainerButtonProject>
            </AnimateSharedLayout>
          </WrapperContentProject>

          <AnimateSharedLayout>
          <motion.div
          animate={inView ? 'visible' : 'hidden'}
          initial="hidden" 
          variants={{
          'visible': {
            translateX: 0,
            transition: {
              type: 'spring',
              duration: 0.5,
              delay: 0.3,
            }
          },
          'hidden': {
            translateX: '-120vw',
          }}}>
            <FaArrowRight 
              size={isMobile ? 16 : 40} 
              color="var(--color-secundary)"
              onClick={nextProject}
              className="ArrowLeft"

            />
          </motion.div>
        </AnimateSharedLayout>

        </ContentProjectHeader>

        <AnimateSharedLayout>
          <ContainerImageProject animate={inView ? 'visible' : 'hidden'}
          initial='hidden'
          variants={{
            'visible': {
              scale: 1,
              transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.3,
                delay: 1.5,
              }
            },
            'hidden': {
              scale: 0,
            },
          }}>
            <img src={project.imageBackground} alt={project.title} />
          </ContainerImageProject>
        </AnimateSharedLayout>

      </Project>
      ))}
    </Container>
  )
}

export default Projects;

