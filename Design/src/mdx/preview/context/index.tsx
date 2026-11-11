import React, { createContext, useContext } from 'react';

// Partials
import { usePreview } from './use-preview';

type Preview = NonNullable<ReturnType<typeof usePreview>>;

const PreviewContext = createContext<Preview | null>(null);

type Props = React.PropsWithChildren<
  Omit<Parameters<typeof usePreview>[0], 'children'> & {
    presets: React.ReactNode;
  }
>;

const Provider: React.FunctionComponent<Props> = ({
  children,
  presets,
  ...props
}) => {
  const preview = usePreview({ ...props, children: presets });

  if (!preview) {
    return null;
  }

  return (
    <PreviewContext.Provider value={preview}>
      {children}
    </PreviewContext.Provider>
  );
};

const usePreviewContext = () => {
  const preview = useContext(PreviewContext);

  if (!preview) {
    throw new Error('usePreviewContext needs a Preview around it.');
  }

  return preview;
};

export { Provider, usePreviewContext };
