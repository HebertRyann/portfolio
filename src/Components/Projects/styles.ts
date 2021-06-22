import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';

const arrowLeft = keyframes`
  0%,100% {
    transform: translateX(0px);
  }
  70% {
    transform: translateX(-20px);
  }
`;
const arrowRight = keyframes`
  0%,100% {
    transform: translateX(0px);
  }
  70% {
    transform: translateX(20px);
  }
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px;
`;
export const TitleProjects = styled(motion.div)`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 110px;
`;

export const WrapperContentProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  /* border: 1px solid green; */
  /* height: 70%; */  
  /* margin-left: 80px; */
  /* align-items: center; */
`;

export const Project = styled(motion.div)`
  display: flex;
  /* align-items: center; */
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid red; */
  /*
  height: 90vh;
  overflow: hidden;
  margin-top: 104px; */
`;

export const ContainerImageProject = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`;
export const ProjectHeader = styled(motion.div)`
  margin-bottom: 72px;
  h1 {
    font-size: 64px;
    font-family: 'Roboto';
    font-weight: 500;
    color: var(--color-secundary);
    /* width: 400px; */
  }
  h2 {
    font-size: 43px;
    font-family: 'Roboto';
    font-weight: 400;
    color: var(--color-secundary);
  }
`;
export const ContentProjectHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  /* border: 1px solid red; */
  svg:nth-child(1) {
    animation: ${arrowLeft} 1s;
  }
  svg:nth-child(2) {
    animation: ${arrowRight} 1s;
  }
`;
export const ContainerDescription = styled(motion.div)`
  margin-bottom: 110px;
  width: 80%;
  p {
    font-size: 24px;
    font-family: 'Roboto';
    font-weight: 400;
  }
`;
export const ContainerStack = styled.div`
  span {
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 400;

  }
`;

export const ContentStack = styled.div`
`;

export const ContainerButtonProject = styled(motion.div)`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 400;
    height: 72px;
    width: 200px;
    border-radius: 5px;
    background: var(--color-secundary);
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${shade(0.2, '#0066ff')};
    }
  }
`;

export const ContainerScrollCarrousel = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* bottom: -60px; */
  left: -50px;
  will-change: transform;
  svg:nth-child(2) {
    margin-left: 500px;
  }
  .ArrowLeft:active {
    animation: ${arrowLeft} 0.3s ease-in-out;
  }
`;