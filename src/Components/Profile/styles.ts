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
    color: #fff;
    transition: 0.3s ease-in-out;
    & + button {
      margin-left: 50px;
    }
    &:hover {
      /* background: ${shade(0.2, `var(--color-secundary)`)}; */
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
    font-size: 54px;
  }
  p {
    font-family: ${RobotoSlab};
    font-size: 36px;
  }
`;

export const ContentProfile = styled.div`
`;