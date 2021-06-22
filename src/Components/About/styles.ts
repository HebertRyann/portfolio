import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Roboto, RobotoSlab, RobotoTitle } from '../../styles/stylesConfig';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;

  margin-top: 56px;
`;

export const Title = styled(motion.div)`
  display: flex;
  justify-content: center;
  h1 {
    font-size: 4rem;
    font-family: ${Roboto};
    font-weight: 400;
  }
`;

export const ContentAbout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerMySkills = styled.div`
  margin-top: 40px;
  span {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto';
  }
  p {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto';
  }
  div {
    margin-bottom: 8px;
  }
`;
export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  width: 250px;
  background: #fff;
  box-shadow: 2px 2px 4px rgba(0,0,0, 0.2);
  padding: 30px;
  border-radius: 8px;
  svg {
    margin-bottom: 50px;
  }

  p {
    display: none;
  }
  & + div {
    margin-left: 20px;
  }
`;
export const ContainerConpetetions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Competetion = styled.div`
  height: 80px;
  width: 80px;
  background: #f4f4f4;
  border-radius: 50%;
`;
export const WrapperContentAbout = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
  margin-bottom: 100px
`;
export const ContainerProfile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div.ContainerProfileImage {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 350px;
    height: 350px;
    overflow: hidden;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    border-radius: 50%;
    img {
      object-fit: cover;
      object-position: center;
    }
    /* img.Cartoon {
      object-fit: scale-down;
      object-position: center 40px;
    } */
  }
`;

export const TitleSkills = styled.div`
  strong {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Roboto';
    margin-bottom: 8px;
  }
`;

export const WrapperContentSkills = styled.div`
  display: flex;
  max-width: 1440px;
`;

export const ContainerSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  svg:nth-child(2) {
    margin-left: 16px;
  }
`;
export const ContainerTextAbout = styled.div`
  width: 50%;
  font-size: 1.5rem;
  font-family: 'Roboto';
  font-weight: 400;
`;

export const ContainerSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContentSkills = styled(motion.div)`
  h1 {
    font-size: 3rem;
    font-family: ${Roboto};
    font-weight: 400;
    color: #0066ff;
    margin-bottom: 16px;
  }
  div {
    border-bottom: 2px solid #0066ff;
    p {
      font-size: 1.3rem;
      font-family: ${Roboto};
      font-weight: 400;
      margin-bottom: 8px;
    }
    & + div {
      margin-top: 48px
    }
  }
`;

export const ContainerTools = styled(motion.div)`
  h1 {
    font-size: 3rem;
    font-family: ${Roboto};
    font-weight: 400;
    color: #FF0066;
    margin-bottom: 16px;
  }
  div {
    border-bottom: 3px solid #FF0066;
    p {
      font-size: 1.3rem;
      font-family: ${Roboto};
      font-weight: 400;
      margin-bottom: 8px;
    }
    & + div {
      margin-top: 48px
    }
  }
`;
