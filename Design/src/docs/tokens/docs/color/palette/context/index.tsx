import React, { createContext, useContext, useRef } from 'react';

// Spec
import type { Swatch } from 'design/docs/tokens/docs/color/constants';

type Palette = {
  probe: React.RefObject<HTMLSpanElement | null>;
  swatches: Swatch[];
};

const PaletteContext = createContext<Palette | null>(null);

type Props = React.PropsWithChildren<{ swatches: Swatch[] }>;

const Provider: React.FunctionComponent<Props> = ({ children, swatches }) => {
  const probe = useRef<HTMLSpanElement>(null);

  return (
    <PaletteContext.Provider value={{ probe, swatches }}>
      {children}
    </PaletteContext.Provider>
  );
};

const usePalette = () => {
  const palette = useContext(PaletteContext);

  if (!palette) {
    throw new Error('usePalette needs a Palette around it.');
  }

  return palette;
};

export { Provider, usePalette };
