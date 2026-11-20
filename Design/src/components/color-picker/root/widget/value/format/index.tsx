import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import { Button } from 'design/components/button';
import { Text } from 'design/components/text';

// Hooks
import { useClipboard } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

// Constants
import { CLASS_NAME } from 'design/components/color-picker/constants';

const LOOKS = {
  hex: { lookLike: 'pre' },
  oklch: { lookLike: 'small', variant: 'secondary' },
} as const;

type Props = { format: keyof typeof LOOKS };

const Format: React.FunctionComponent<Props> = ({ format }) => {
  const t = useCopy();
  const { color } = useColorPicker();
  const { copied, copy } = useClipboard();
  const { c, h, l } = color.channels;
  const text = {
    hex: color.hex.toUpperCase(),
    oklch: `oklch(${Math.round(l * 100)}% ${c.toFixed(3)} ${Math.round(h)})`,
  }[format];
  const Icon = copied ? Tb.TbCheck : Tb.TbFiles;

  return (
    <Button
      aria-label={t(copied ? 'color_picker_copied' : 'color_picker_copy', {
        value: text,
      })}
      before={
        <Icon
          aria-hidden
          className={copied ? 'kicl-color-confirm' : undefined}
        />
      }
      className={`${CLASS_NAME}__format`}
      onClick={() => {
        void copy(text);
      }}
      type='button'
      unstyled
    >
      <Text dense is='span' {...LOOKS[format]}>
        <bdi dir='ltr'>{text}</bdi>
      </Text>
    </Button>
  );
};

export { Format };
