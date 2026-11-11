import React from 'react';

// Partials
import type { useDocsCopy } from 'design/mdx/copy';
import type { ControlsSpec } from './spec';

export type PresetProps = React.PropsWithChildren<{
  /** The key of its name on the page. `name` stays in English for the code. */
  label: Parameters<ReturnType<typeof useDocsCopy>>[0];
  name: string;
  /**
   * The example's own file, read with `?raw`. Its component must be named
   * `Preview`; the code shown renames it after the page and preset.
   */
  code: string;
  /**
   * Added to the page's toggles. `null` removes a page toggle that doesn't
   * apply to this example.
   */
  controls?: Record<string, ControlsSpec[string] | null>;
  description?: React.ReactNode;
}>;

const Preset: React.FunctionComponent<PresetProps> = ({ children }) => {
  return <>{children}</>;
};

export { Preset };
