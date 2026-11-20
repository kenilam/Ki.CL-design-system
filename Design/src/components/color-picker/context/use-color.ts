import { useState } from 'react';

// Helpers
import {
  hexOf,
  oklchOf,
  type Channels,
} from 'design/components/color-picker/color';

// Constants
import { START } from 'design/components/color-picker/constants';

// Spec
import type { ColorPickerProps } from 'design/components/color-picker/spec';

type Props = Pick<ColorPickerProps, 'defaultValue' | 'onValueChange' | 'value'>;

// The sliders keep their own channels, so a grey keeps its hue while chroma is 0.
const useColor = ({ defaultValue, onValueChange, value }: Props) => {
  const [channels, setChannels] = useState(() => {
    return oklchOf(value ?? defaultValue ?? START);
  });
  const [followed, setFollowed] = useState(value);
  const hex = hexOf(channels);

  if (value !== followed) {
    setFollowed(value);

    if (value && value.toLowerCase() !== hex) {
      setChannels(oklchOf(value));
    }
  }

  const change = (channel: keyof Channels, amount: number) => {
    const next = { ...channels, [channel]: amount };

    setChannels(next);
    onValueChange?.(hexOf(next));
  };

  const style = {
    '--kicl--components--color-picker--c': channels.c,
    '--kicl--components--color-picker--h': channels.h,
    '--kicl--components--color-picker--l': channels.l,
    '--kicl--components--color-picker--value': hex,
  } as React.CSSProperties;

  return { change, channels, hex, style };
};

export { useColor };
