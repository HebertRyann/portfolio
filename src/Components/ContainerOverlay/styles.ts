import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { Roboto, RobotoSlab, RobotoTitle } from '../../styles/stylesConfig';

const FadeTtilte = keyframes`
  from {
    transform: translateY(-120%);
  }
  to {
    transform: translateY(0%);
  }
`;

export const Container = styled(motion.div)``;

export const Header = styled.header`
  will-change: transform;
  display: flex;
  justify-content: center;
`;

export const TitleHeader = styled(motion.h1)`
  margin-top: 40px;
  font-size: 3rem;
  font-family: ${Roboto};
  font-weight: 400;
`;