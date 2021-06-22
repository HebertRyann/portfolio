import { useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { opacity } from '../Containers/ModelOverlay';
import { useWrapperScroll } from '../Containers/UseWrapperScroll';
import {
  Container,
  Header,
  TitleHeader
} from './styles';

interface OverlayProps {
  textHeader?: string;
}

const ContainerOverlay: React.FC<OverlayProps> = ({ textHeader, children }) => {
  

  return (
    <Container >
      {textHeader && (
        <Header>
          <TitleHeader>{textHeader}</TitleHeader>
        </Header>
      )}

      {children}
    </Container>
  )
};

export { ContainerOverlay };