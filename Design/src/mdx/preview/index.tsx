import React from 'react';

// Partials
import { Preset } from './preset';
import { Provider } from './context';
import { Provider as ElementProvider } from './context/element';
import { Provider as StageProvider } from './context/stage';
import { Root } from './root';
import type { usePreview } from './context/use-preview';

/**
 * The example spreads these last on its component, so a control wins over
 * what the file writes.
 */
export type Controlled<
  Component extends React.ElementType,
  Key extends keyof React.ComponentPropsWithoutRef<Component>,
> = Partial<Pick<React.ComponentPropsWithoutRef<Component>, Key>> &
  Pick<React.HTMLAttributes<HTMLElement>, 'className'>;

export type { ControlsSpec } from './spec';

const Preview: React.FunctionComponent<Parameters<typeof usePreview>[0]> = ({
  children,
  ...props
}) => {
  return (
    <StageProvider>
      <ElementProvider>
        <Provider {...props} presets={children}>
          <Root />
        </Provider>
      </ElementProvider>
    </StageProvider>
  );
};

export { Preset, Preview };
