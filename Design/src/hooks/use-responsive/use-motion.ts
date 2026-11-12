// Libraries
import { useMediaQuery } from 'react-responsive';

const useMotion = () => {
  const prefersReducedMotion = useMediaQuery({
    query: '(prefers-reduced-motion: reduce)',
  });

  return { prefersReducedMotion };
};

export { useMotion };
