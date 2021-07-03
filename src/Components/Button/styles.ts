import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.a`
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
  color: var(--color-background);
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    filter: brightness(0.8);
  }

  @media(max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Roboto';
    font-weight: 400;
    height: 72px;
    width: 100%;
    border-radius: 5px;
    background: var(--color-secundary);
    color: var(--color-background);
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;