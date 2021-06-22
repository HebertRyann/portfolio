import React, { useEffect, useRef } from 'react';
import { useContainer } from '../useContext';
import {
  Container,
} from './styles';

interface SectionProps {
  containerName: string;
  overlayNode: React.ReactNode;
}

const ContainerSection: React.FC<SectionProps> = ({ overlayNode, containerName, children, ...rest }) => {
  const { registerContainer } = useContainer(containerName);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(sectionRef.current) {
      registerContainer({ containerName, overlayNode, containerSection: sectionRef })
    }
  }, [registerContainer, overlayNode, containerName, children]);
  return (
    <Container {...rest} ref={sectionRef}>
      {children}
    </Container>
  )
};

export { ContainerSection };