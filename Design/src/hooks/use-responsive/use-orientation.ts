// Libraries
import { useMediaQuery } from 'react-responsive';

const useOrientation = () => {
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return { isLandscape, isPortrait };
};

export { useOrientation };
