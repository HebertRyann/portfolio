import { useCallback, useRef, useState } from 'react';
import {
  Container,
  OverlayRoot,
} from './styles';
import ContainerContext, { ContainerProps } from '../ContainerContext';
import { ModelOverlay } from '../ModelOverlay';
import { MotionValue } from 'framer-motion';


const ContainersWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
 const [currentOpacity, setCurrentOpacity] = useState<MotionValue<number>>();
  const [registeredContainers, setRegisteredContainers] = useState<ContainerProps[]>([]);

  const registerContainer= useCallback((container: ContainerProps) => {
    setRegisteredContainers(state => [...state, { ...container }]);
  },[]);

  const unregisterContainer= useCallback((containerName: string) => {
    setRegisteredContainers(state => state.filter(container => container.containerName !== containerName));
  },[]);

  const getContainerByName= useCallback((containerName: string) => {
    return registeredContainers.find(container => container.containerName === containerName) || null;
  },[registeredContainers]);

  const setOpacity= useCallback((selectOpacity: MotionValue<number>) => {
    setCurrentOpacity(selectOpacity);
  },[registeredContainers]);


  return (
    <ContainerContext.Provider value={{
      getContainerByName,
      registerContainer,
      registeredContainers,
      unregisterContainer,
      wrapperRef,
    }}>
      <Container ref={wrapperRef}>
        <OverlayRoot>
          {registeredContainers.map(item => (
            <ModelOverlay 
              key={item.containerName}
              model={item}
            >
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlayRoot>
        {children}
      </Container>
    </ContainerContext.Provider>
  )
};

export { ContainersWrapper };