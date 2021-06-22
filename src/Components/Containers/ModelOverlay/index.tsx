import { MotionValue, useTransform } from 'framer-motion';
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import ContainerContext, { ContainerProps } from '../ContainerContext';
import { useWrapperScroll } from '../UseWrapperScroll';
import { Container } from './styles';

interface ModelOverlayProps {
  model: ContainerProps;
}

export let opacity: MotionValue<number>;

type SectionDimensions = Pick<HTMLDivElement, 'offsetHeight' | 'offsetTop'>

const ModelOverlay: React.FC<ModelOverlayProps> = ({ children, model }) => {
  const { scrollY } = useWrapperScroll();

  
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.containerSection.current?.offsetTop,
      offsetHeight: model.containerSection.current?.offsetHeight,
    } as SectionDimensions
  }, [model.containerSection]);

  
  const [dimensions, setDimensions] = useState<SectionDimensions>(getSectionDimensions())


  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => {
        setDimensions(getSectionDimensions());
      });
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [getSectionDimensions]);


  const sectionScrollProgress = useTransform(scrollY, offsetY => (
    (offsetY - dimensions.offsetTop) / dimensions.offsetHeight
  ));

  const currentOpacity = useTransform(
    sectionScrollProgress, 
    [-0.42, -0.05, 0.05, 0.],
    [0, 1, 1, 0]
  );

  // useEffect(() => {
  //   opacity = sectionScrollProgress
  // }, [sectionScrollProgress]);



  const pointerEvents = useTransform(currentOpacity, value => (
    value > 0 ? 'auto' : 'none'
  ));

  const translateX = useTransform(sectionScrollProgress, [-0.42, -0.05, 0.05, 0.80],
    [-120, 0, 0, 120]);

  return (
    <Container style={{ opacity: currentOpacity, pointerEvents, translateX }}>
      {children}
    </Container>
  )
};

export { ModelOverlay };