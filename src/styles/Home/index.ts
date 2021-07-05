import { motion } from 'framer-motion';
import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import { RobotoSlab } from '../stylesConfig';


const test = keyframes`
  from {
    transform: translateY(-120%);
  }
  to {
    transform: translateY(0);
  }
`;
const test2 = keyframes`
  from {
    opacity: 0;
    transform: translateY(120%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  overflow: hidden;
`;

export const WrapperContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #892cdc;
  }
`;

export const ContainerAboutMe = styled.div`
  background: rgba(24,24,21, 0.5);
  height: 100vh;
  width: 50vw;
`;

export const ContainerMySkills = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
  h1 {
    font-size: 54px;
    font-weight: 400;
    font-family: ${RobotoSlab};
  }
`;


export const ContainerProjects = styled.div`
`;

export const Project = styled.div`

`;
export const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 102px;
  width: 150px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0, 0.2);
  margin: 30px;
`;

export const ContentMySkills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;

export const ContainerSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

export const ContainerCardSkillsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  width: 100%;
`;

export const ContainerCardSkillsBottom = styled.div`
  height: 50%;
  width: 100%;
`;
export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 20%;
  color: #fff;
  background: #0066ff;
  border-radius: 8px;
  overflow: hidden;
  animation: ${test} 2s ease-in-out;
  h1 {
    font-size: 80px;
    margin-bottom: 120px;
  }
`;

export const OverlayHover = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: rgba(0,0,0, 0.3);
  animation: ${test2} 1s ease-in-out;
  p {
    font-size: 18px;
    line-height: 40px;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #000;
`;


