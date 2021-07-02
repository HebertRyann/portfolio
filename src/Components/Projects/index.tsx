import { AnimateSharedLayout, MotionValue, useMotionValue, useTransform, useViewportScroll, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaLink } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
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
    description: `Uma plataforma onde as ongs podem colocar seus casos para ajuda e
    pessoas podem ver esses casos e ajudar`,
    imageBackground: ``,
    buttonLink: 'https://hebertryann.github.io/react-gh-pages/#/',
    stacks: ['Reactjs']
  },
  { 
    title: 'GoBarber', 
    subTitle: 'Plataforma para barbearias',
    description: `Uma plataforma onde os barbeiros podem se cadastrar, 
    e os usuarios atraves da versão mobile podem agendar um horario com qualquer um dos
    barbeiros.`,
    imageBackground: ``,
    buttonLink: 'https://hebertryann.github.io/gobarberr/',
    stacks: ['Reactjs', 'Typescript']
  },
  { 
    title: 'KabumClone', 
    subTitle: 'E-commerce',
    description: `Clone da e-commmerce da kabum. 
    Website feito com intuito de consolidar meus conhecimentos em nextjs, 
    eu refiz o design e acrescentei um carrinho, scroll carrosel, 
    e contagem regressiva de promoçao`,
    imageBackground: ``,
    buttonLink: 'https://kabum-clone.vercel.app',
    stacks: ['Nextjs', 'Typescript']
  },
]

interface ProjectsProps {
  refContainer: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<ProjectsProps> = ({ refContainer }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
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

  const translateX = useTransform(
    scrollYProgress,
    [0.6,0.9],
    [-500,0]
  );

  return (
    <Container style={{ opacity, translateX }} ref={ref}>
      <TitleProjects animate={inView ? 'visible' : 'hidden'}
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
        key={index}
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

        <ContentProjectHeader ref={refContainer}>
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

              size={40} 
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
                  <span>Nextjs - </span>
                  <span>css - </span>
                  <span>javascript</span>
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
              size={40} 
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
                delay: 2.5,
              }
            },
            'hidden': {
              scale: 0,
            },
          }}>
            <h1>Image Background</h1>
          </ContainerImageProject>
        </AnimateSharedLayout>

      </Project>
      ))}
    </Container>
  )
}

export { Projects };

