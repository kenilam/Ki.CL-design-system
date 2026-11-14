import { useAnimated } from 'design/components/animated/context';

import { ZOOMS } from 'design/components/animated/constants';

const useMotion = () => {
  const animated = useAnimated();

  return (order: number) => {
    return {
      delay: animated.delay + animated.stagger * order,
      duration: animated.duration,
      easing: animated.easing,
      hold: animated.hold,
      in: animated.in,
      property: ZOOMS.includes(animated.property) ? 'fade' : animated.property,
    } as const;
  };
};

export { useMotion };
