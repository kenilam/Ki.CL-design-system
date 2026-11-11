// Spec
import type * as Spec from './spec';

const useLayout = ({
  alignContent,
  alignItems,
  autoFlow,
  display,
  frames,
  fullScreen,
  gap = 'normal',
  is = 'ul',
  justifyContent,
  justifyItems,
  wrap,
  ...rest
}: Spec.Props) => {
  return {
    is,
    layout: {
      alignContent,
      alignItems,
      autoFlow,
      display,
      frames,
      fullScreen,
      gap,
      justifyContent,
      justifyItems,
      wrap,
    },
    rest,
  };
};

export { useLayout };
