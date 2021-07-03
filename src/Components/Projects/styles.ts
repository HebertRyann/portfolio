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
  /* padding: 30px; */
`;
export const TitleProjects = styled(motion.div)`
  h1 {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    font-family: 'Roboto';
    font-weight: 400;
    margin-bottom: 250px;
  }

  @media(max-width: 1024px) {
    h1 {
      display: flex;
      justify-content: center;
      font-size: 3rem;
      font-family: 'Roboto';
      font-weight: 400;
      margin-bottom: 48px;
    }
  }
`;

export const WrapperContentProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  /* border: 1px solid green; */
  /* height: 70%; */  
  /* margin-left: 80px; */
  /* align-items: center; */

  @media(max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 75%;
  }
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

  @media(max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContainerImageProject = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;

  @media(max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const ProjectHeader = styled(motion.div)`
  margin-bottom: 72px;
  color: var(--color-secundary);
  h1 {
    font-size: 64px;
    font-family: 'Roboto';
    font-weight: 500;
    /* width: 400px; */
  }
  h2 {
    font-size: 43px;
    font-family: 'Roboto';
    font-weight: 400;
  }

  @media(max-width: 1024px) {
    margin-bottom: 0px;
    color: var(--color-secundary);
    width: 100%;
    margin: 0 auto;
    h1 {
      font-size: 3rem;
      font-family: 'Roboto';
      font-weight: 500;
      /* width: 400px; */
    }
    h2 {
      font-size: 1.5rem;
      font-family: 'Roboto';
      font-weight: 400;
    }

  }
`;
export const ContentProjectHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  width: 60%;
  margin: 0 auto;
  /* border: 1px solid red; */
  svg:nth-child(1) {
    animation: ${arrowLeft} 1s;
  }
  svg:nth-child(2) {
    animation: ${arrowRight} 1s;
  }

  @media(max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    /* margin: 0 auto; */
    /* border: 1px solid red; */
    svg:nth-child(1) {
      animation: ${arrowLeft} 1s;
    }
    svg:nth-child(2) {
      animation: ${arrowRight} 1s;
    }
  }
`;
export const ContainerDescription = styled(motion.div)`
  margin-bottom: 110px;
  width: 100%;
  p {
    font-size: 24px;
    font-family: 'Roboto';
    font-weight: 400;
  }

  @media(max-width: 1024px) {
    margin: 36px 0;
    width: 100%;
    p {
      font-size: 16px;
      font-family: 'Roboto';
      font-weight: 400;
      /* text-align: center; */
    }
  }
`;
export const ContainerStack = styled.div`
  span {
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 400;
  }

  @media(max-width: 1024px) {
    span {
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: 400;
  }
  }
`;

export const ContentStack = styled.div`
`;

export const ContainerButtonProject = styled(motion.div)`
  display: flex;
  align-items: center;
  @media(max-width: 1024px) {
    justify-content: center;
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