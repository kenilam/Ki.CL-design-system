import React, { createContext, useContext, useId } from 'react';

// Spec
import type * as Spec from 'design/components/image/zoomable/spec';

type Props = React.PropsWithChildren<Omit<Spec.Props, 'className'>>;

type Value = Omit<Props, 'children'> & { id: string };

const ZoomableImageContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  alt,
  children,
  data,
  loading,
  onError,
  onLoad,
  placeholder,
}) => {
  const id = useId();

  return (
    <ZoomableImageContext.Provider
      value={{ alt, data, id, loading, onError, onLoad, placeholder }}
    >
      {children}
    </ZoomableImageContext.Provider>
  );
};

const useZoomableImage = () => {
  const image = useContext(ZoomableImageContext);

  if (!image) {
    throw new Error('useZoomableImage needs a ZoomableImage around it.');
  }

  return image;
};

export { Provider, useZoomableImage };
