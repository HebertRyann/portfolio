import styled from 'styled-components';
import {  } from '../../styles/stylesConfig';

export const Container = styled.header`
  display: flex;
  align-items: center;

  position: absolute;

  height: 104px;
  width: 100%;
`;
export const ContainerTitle = styled.header`
  display: flex;
  align-items: center;
`;
export const ContainerButtons = styled.header`
  display: flex;
  justify-content: space-between;
  width: 25%;
  button {
    display: flex;
    background: transparent;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    height: 56px;
    width: 142px;
    border-radius: 5px;
    color: #fff;
  }

`;

export const WrapperContentHeader = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const ContentHeader = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerSwitchTheme = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--color-secundary);
    width: 250px;
    height: 80px;
    border-radius: 8px;
  }
`;