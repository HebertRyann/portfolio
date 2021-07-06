import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Roboto, RobotoSlab, RobotoTitle } from '../../styles/stylesConfig';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* max-width: 1440px;
  margin: 0 auto; 
  overflow: hidden;
  */

  margin-top: 56px;

  @media(max-width: 1024px) {
    padding: 0 20px;
  }
`;
export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* max-width: 1440px;
  margin: 0 auto; 
  overflow: hidden;
  */

  margin-top: 56px;

  @media(max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const Title = styled(motion.div)`
  display: flex;
  justify-content: center;
  h1 {
    font-size: 4rem;
    font-family: ${Roboto};
    font-weight: 400;
  }

  @media(max-width: 1024px) {
    display: flex;
    justify-content: center;
    h1 {
      font-size: 3rem;
      font-family: ${Roboto};
      font-weight: 400;
    }
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
  margin-bottom: 80px;

  @media(max-width: 1024px) {
    flex-direction: column;
    align-items: unset;
    margin-top: 24px;
    margin-bottom: 14px;
  }
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
  }

  @media(max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    div.ContainerProfileImage {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 150px;
      height: 150px;
      overflow: hidden;
      box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      border-radius: 50%;
      img {
        object-fit: cover;
        object-position: center;
      }
    }
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
  a:nth-child(2) {
    margin-left: 16px;
  }
`;
export const ContainerTextAbout = styled.div`
  width: 50%;
  font-size: 1.5rem;
  font-family: 'Roboto';
  font-weight: 400;

  @media(max-width: 1024px) {
    width: 100%;
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 400;
  }
`;

export const ContainerSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContentSkills = styled(motion.div)`
  h1 {
    font-size: 3rem;
    font-family: ${Roboto};
    font-weight: 400;
    color: var(--color-secundary);
    margin-bottom: 16px;
  }
  div {
    border-bottom: 2px solid var(--color-secundary);
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

  @media(max-width: 1024px) {
    h1 {
      font-size: 1.5rem;
      font-family: ${Roboto};
      font-weight: 400;
      color: var(--color-secundary);
      margin-bottom: 16px;
      text-align: center;
    }
    div {
      border-bottom: 2px solid var(--color-secundary);
      p {
        font-size: 1rem;
        font-family: ${Roboto};
        font-weight: 400;
        margin-bottom: 8px;
      }
      & + div {
        margin-top: 20px
      }
      span {
        font-size: 14px;
      }
    }
  }
`;

export const ContainerTools = styled(motion.div)`
  width: 100%;
  h1 {
    font-size: 3rem;
    font-family: ${Roboto};
    font-weight: 400;
    color: var(--color-complementary);
    margin-bottom: 16px;
  }
  div {
    border-bottom: 2px solid var(--color-complementary);
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


  @media(max-width: 1024px) {
    margin-top: 24px;
    width: 100%;
    h1 {
      font-size: 1.5rem;
      font-family: ${Roboto};
      font-weight: 400;
      color: var(--color-complementary);
      margin-bottom: 16px;
      text-align: center;
    }
    div {
      width: 100%;
      border-bottom: 2px solid var(--color-complementary);
      p {
        font-size: 1rem;
        font-family: ${Roboto};
        font-weight: 400;
        margin-bottom: 8px;
        
      }
      & + div {
        margin-top: 20px
      }
      span {
        font-size: 14px;
      }
    }
  }
`;
