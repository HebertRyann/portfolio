import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  color: var(--color-text);
  h1 {
    margin-top: 36px;
    margin-bottom: 54px;
  }
`;
export const ContentContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-text);
  }
  div {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-text);
  }
  svg {
    cursor: auto;
    margin-right: 16px;
    color: var(--color-secundary);
  }
`;