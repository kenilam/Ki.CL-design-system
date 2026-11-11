import React, { createContext, useContext, useState } from 'react';

// Spec
import type * as Spec from 'design/components/image/spec';

type Props = React.PropsWithChildren<
  Pick<
    Spec.Props,
    'alt' | 'data' | 'loading' | 'onError' | 'onLoad' | 'placeholder'
  >
>;

type Value = Omit<Props, 'children'> & {
  hasError: boolean;
  isLoading: boolean;
  settle: (failed: boolean) => void;
};

type Result = { src: string; failed: boolean };

const ImageContext = createContext<Value | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  alt,
  children,
  data,
  loading,
  onError,
  onLoad,
  placeholder,
}) => {
  // Keyed by `src`, so a new `data` starts loading again without an effect.
  const [result, setResult] = useState<Result>();

  const isSettled = !!data && result?.src === data;

  const settle = (failed: boolean) => {
    if (data) {
      setResult({ src: data, failed });
    }
  };

  return (
    <ImageContext.Provider
      value={{
        alt,
        data,
        hasError: isSettled && result.failed,
        isLoading: !!data && !isSettled,
        loading,
        onError,
        onLoad,
        placeholder,
        settle,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

const useImage = () => {
  const image = useContext(ImageContext);

  if (!image) {
    throw new Error('useImage needs an Image around it.');
  }

  return image;
};

export { Provider, useImage };
