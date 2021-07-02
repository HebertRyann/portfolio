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
`;