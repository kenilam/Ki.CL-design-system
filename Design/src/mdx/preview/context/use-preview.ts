import React, { useState } from 'react';

// Components
import type { ColumnSpan } from 'design/components';

// Partials
import { Preset, type PresetProps } from 'design/mdx/preview/preset';
import { readTag, valuesOf } from 'design/mdx/preview/source';
import {
  type ControlsSpec,
  type Value,
  type Values,
  controlOf,
} from 'design/mdx/preview/spec';
import { appliedOf, extrasOf, withValue } from 'design/mdx/preview/values';

type Props = React.PropsWithChildren<{
  controls?: ControlsSpec;
  /**
   * Mounts the example again when a control changes, for a component that
   * only animates as it first renders.
   */
  replay?: boolean;
  /**
   * The stage's maximum width in columns. Without it the stage is as wide as
   * the page.
   */
  span?: ColumnSpan;
}>;

const usePreview = ({ children, controls: spec = {}, replay, span }: Props) => {
  const presets = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<PresetProps> => {
      return React.isValidElement(child) && child.type === Preset;
    }
  );

  const [chosen, setChosen] = useState(presets[0]?.props.name);
  const preset =
    presets.find(({ props }) => {
      return props.name === chosen;
    }) ?? presets[0];

  const controlsOf = (shown?: React.ReactElement<PresetProps>) => {
    return Object.fromEntries(
      Object.entries({ ...spec, ...shown?.props.controls }).flatMap(
        ([name, control]) => {
          return control ? [[name, controlOf(control)]] : [];
        }
      )
    );
  };
  const controls = controlsOf(preset);
  const names = Object.keys(controls);

  const tag = preset ? readTag(preset.props.code) : null;
  const { literals, values: written } = valuesOf(tag, names);

  const [values, setValues] = useState<Values>(written);

  if (!preset) {
    return null;
  }

  const pick = (name: string) => {
    const next = presets.find(({ props }) => {
      return props.name === name;
    });

    setChosen(name);
    setValues(
      next
        ? valuesOf(readTag(next.props.code), Object.keys(controlsOf(next)))
            .values
        : {}
    );
  };

  const set = (name: string, value: Value) => {
    setValues((current) => {
      return withValue(controls, current, name, value);
    });
  };

  const hasControls = names.length > 0 && tag !== null;
  const extras = hasControls ? extrasOf(controls, values, tag) : {};

  return {
    applied: appliedOf(controls, values, extras),
    chosen,
    controls,
    extras,
    hasControls,
    literals,
    names,
    pick,
    preset,
    presets,
    replay,
    set,
    span,
    values,
  };
};

export { usePreview };
