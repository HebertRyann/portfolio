import styled, { css, keyframes } from 'styled-components';

interface ContainerFormProps {
  isError: boolean
}

const Fade = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Move = keyframes`
  from {
    opacity: 0;
    transform: translateX(-35%);

  }to{
    opacity: 1;
    transform: translateX(0%);
  }
`;

const FadeBtn = keyframes`
  from {
    transform: scale(0);
  }to {
    transform: scale(1);
  }
`;

const Down = keyframes`
  from {
    transform: translateY(0);
  } to {
    transform: translateY(100vh);
  }
`;
const Nono = keyframes`
  0%,100% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(-5%);
  }
  70%{
    transform: translateX(5%);
  }
`;

const Up = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  } 
  to {
    transform: translateY(-1400px) rotate(960deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50vw;

`;

export const WrapperContentForm = styled.div<ContainerFormProps>`
  display: flex;
  flex-direction: column;
  width: 90%;
  input {
    box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    padding: 16px;
    border-radius: 3px;
    border: 2px solid #fff;
    & + input {
      margin-top: 50px;
    }
  }
  input:nth-child(1) {
    animation: ${Move} 2s 0.2s backwards;
  }
  input:nth-child(2) {
    animation: ${Move} 2s 1s backwards;
  }

  ${props => props.isError && css`
    animation: ${Nono} 0.25s linear, Fade paused 2;
    input {
      border: 2px solid red;
    }
  `}
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: all 1s;

  width: 350px;
  height: 400px;

  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  background: #Fff;
  border: 1px solid rgba(0,0,0,0.2);

  animation: ${Fade} 1.5s;



  button {
    background: var(--color-secundary);
    height: 56px;
    width: 156px;
    border-radius: 5px;
    margin-bottom: 28px;
    animation: ${FadeBtn} 2.5s 1s backwards;
    color: #fff;
  }

  h1 {
    margin-top: 28px;
  }
`;

