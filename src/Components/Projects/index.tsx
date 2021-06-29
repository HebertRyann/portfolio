import { AnimateSharedLayout, MotionValue, useMotionValue, useTransform, useViewportScroll, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaLink } from 'react-icons/fa';
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

interface pros {
  style?: MotionValue;
}

const propjects = [
  { 
    title: 'DarkThemeToggle', 
    subTitle: 'Interruptor de tema',
    description: `Interruptor de temas feito com nextjs, 
    fazer esse interruptor trouxe um desafio a mais, porque o nextjs trabalha com
    o lado do servido entao nao tem local storaged para armazernar os temas.
    mas uma soluçao e usar variaveis css.`,
    imageBackground: ``,
    buttonLink: '',
    stacks: ['nextjs', 'typescript', 'css3']
  },
  { 
    title: 'Formulario Animado', 
    subTitle: 'Formulario com animações',
    description: `Fiz esse projeto para aprender mais sobre css e keyframes,
    eu fiz no inicio dos meus aprendizados, ele e bem simples.`,
    imageBackground: ``,
    buttonLink: '',
    stacks: ['Html5', 'Javascript', 'Css3']
  },
  { 
    title: 'BeTheHero', 
    subTitle: 'Plataforma para ongs',
    description: `Uma plataforma onde as ongs podem colocar seus casos para ajuda e
    pessoas podem ver esses casos e ajudar`,
    imageBackground: ``,
    buttonLink: '',
    stacks: ['Reactjs']
  },
  { 
    title: 'Playerjs', 
    subTitle: 'Player de audio',
    description: `Esse projeto tem o intuito de melhorar e aprofundar minhas
    habilidades em react.`,
    imageBackground: ``,
    buttonLink: '',
    stacks: ['Reactjs', 'Typescript']
  },
  { 
    title: 'DarkThemeToggle', 
    subTitle: 'botao para fazer a troca de tema escuro e claro',
    description: `Clone da e-commmerce da kabum. 
    Website feito com intuito de consolidar meus conhecimentos em nextjs, 
    eu refiz o design e acrescentei um carrinho, scroll carrosel, 
    e contagem regressiva de promoçao`,
    imageBackground: ``,
    buttonLink: ''
  },
  { 
    title: 'DarkThemeToggle', 
    subTitle: 'botao para fazer a troca de tema escuro e claro',
    description: `Clone da e-commmerce da kabum. 
    Website feito com intuito de consolidar meus conhecimentos em nextjs, 
    eu refiz o design e acrescentei um carrinho, scroll carrosel, 
    e contagem regressiva de promoçao`,
    imageBackground: ``,
    buttonLink: ''
  },
]


const Projects: React.FC<pros> = ({ style }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const nextProject = () => {
    if(currentIndex === propjects.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1)
  };
  const previousProject = () => {
    // setCurrentIndex(currentIndex - 1)
  };
  const { scrollYProgress } = useViewportScroll();
  const { ref, inView } = useInView();


  const opacity = useTransform(
    scrollYProgress,
    [0.60,1],
    [0, 1]
  );

  const translateX = useTransform(
    scrollYProgress,
    [0.6,1],
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

        <ContentProjectHeader>
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
              delay: 0.7,
            }
          },
          'hidden': {
            translateX: '-120vw',
          }}}>
            <FaArrowAltCircleLeft 

              size={40} 
              color={`var(--color-secundary)`} 
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
                      delay: 0.7,
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
                      delay: 0.9,
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
                      delay: 1.1,
                    }
                  },
                  'hidden': {
                    translateX: '-120vw',
                  },
                }}>
                <button >
                  Visite a Pagina
                </button>
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
              bounce: 0.3,
              delay: 0.7,
            }
          },
          'hidden': {
            translateX: '-120vw',
          }}}>
            <FaArrowAltCircleRight 
              size={40} 
              color={`var(--color-secundary)`} 
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
                delay: 3.5,
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

