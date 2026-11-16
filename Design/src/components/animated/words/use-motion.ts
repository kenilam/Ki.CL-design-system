import { useAnimated } from 'design/components/animated/context';

import { ZOOMS } from 'design/components/animated/constants';

const useMotion = () => {
  const animated = useAnimated();
  const property =
    animated.property === 'scramble' ? 'appear' : animated.property;

  return (order: number) => {
    return {
      delay: animated.delay + animated.stagger * order,
      duration: animated.duration,
      easing: animated.easing,
      hold: animated.hold,
      in: animated.in,
      property: ZOOMS.includes(property) ? 'fade' : property,
    } as const;
  };
};

export { useMotion };
