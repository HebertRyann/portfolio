import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import { RobotoSlab } from '../../styles/stylesConfig';

const moveDown = keyframes`
  0%,100% {
    transform: translateY(0px)
  }
  70% {
    transform: translateY(-30%)
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContainerNextPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 50px;
  svg {
    animation: ${moveDown} 1s infinite ease-in-out;
  }
`;

export const WrapperContentProfile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  width: 100%;

  overflow: hidden;

  @media(max-width: 1024px) {
    margin-left: 0px;
    justify-content: center;
    img {
      display: none;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 56px;
  width: 100%;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 68px;
    width: 190px;
    padding: 8px;
    border-radius: 5px;
    background: transparent;
    color: var(--color-secundary);
    font-size: 18px;
    background: var(--color-secundary);
    color: var(--color-background);
    transition: 0.3s ease-in-out;
    & + button {
      margin-left: 50px;
    }
    &:hover {
      /* background: ${shade(0.2, `var(--color-secundary)`)}; */
    }
  }

  @media(max-width: 1024px) {
    flex-direction: column;
    justify-content: center;

    button {
      width: 90%;
      & + button {
        margin-left: 0px;
        margin-top: 24px;

      }
      &:hover {
        /* background: ${shade(0.2, `var(--color-secundary)`)}; */
      }
    }
  }
`;

export const ContainerText = styled.div`
  h1 {
    font-size: 80px;
    color: var(--color-secundary);
    font-family: ${RobotoSlab};
  }
  span {
    font-size: 50px;
  }
  p {

    font-size: 32px;
  }
  
  @media(max-width: 1024px) {
    h1 {
      font-size: 60px;
      color: var(--color-secundary);
      font-family: ${RobotoSlab};
    }
    span {
      font-size: 32px;
    }
    p {

      font-size: 15px;
    }
  }
`;

export const ContentProfile = styled.div`
  margin-right: 110px;

  @media(max-width: 1024px) {
    margin: 0;
  }
`;
