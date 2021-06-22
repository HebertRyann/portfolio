import { useMotionValue } from 'framer-motion';
import { useContext, useEffect } from 'react';
import ContainerContext from './ContainerContext';

export function useWrapperScroll() {
  const { wrapperRef } = useContext(ContainerContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const elemetRef = wrapperRef.current;
    if(elemetRef) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = elemetRef;

        const fullScroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop);
        scrollYProgress.set(scrollTop / fullScroll);
      };

      elemetRef.addEventListener('scroll', updateScrollValue);

      return () => {
        elemetRef?.removeEventListener('scroll', updateScrollValue);
      };
    };
  }, [wrapperRef, scrollY, scrollYProgress]);

  return { scrollY, scrollYProgress };
}