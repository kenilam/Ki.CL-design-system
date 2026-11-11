// Libraries
import { useMediaQuery } from 'react-responsive';

// Partials
import { getBreakpoints } from './breakpoints';

const useBreakpoints = () => {
  const breakpoints = getBreakpoints();

  const isAttenuated = useMediaQuery({
    query: `(max-width: ${breakpoints.attenuated}px)`,
  });
  const isNarrowest = useMediaQuery({
    query: `(max-width: ${breakpoints.narrowest}px)`,
  });
  const isNarrower = useMediaQuery({
    query: `(max-width: ${breakpoints.narrower}px)`,
  });
  const isNarrow = useMediaQuery({
    query: `(max-width: ${breakpoints.narrow}px)`,
  });
  const isNormal = useMediaQuery({
    query: `(max-width: ${breakpoints.normal}px)`,
  });
  const isWide = useMediaQuery({
    query: `(max-width: ${breakpoints.wide}px)`,
  });
  const isWider = useMediaQuery({
    query: `(max-width: ${breakpoints.wider}px)`,
  });
  const isWidest = useMediaQuery({
    query: `(max-width: ${breakpoints.widest}px)`,
  });

  return {
    breakpoints,
    isAttenuated,
    isNarrow,
    isNarrower,
    isNarrowest,
    isNormal,
    isWide,
    isWider,
    isWidest,
  };
};

export { useBreakpoints };
