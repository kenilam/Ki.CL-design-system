import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { RangeInput } from 'design/components';
import { Layout } from 'design/components/layout';
import {
  Popover,
  PopoverHint,
  PopoverTrigger,
} from 'design/components/popover';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

// Constants
import { CHANNELS, CLASS_NAME } from 'design/components/color-picker/constants';

type Props = { channel: keyof typeof CHANNELS };

const Channel: React.FunctionComponent<Props> = ({ channel }) => {
  const t = useCopy();
  const { color, disabled } = useColorPicker();
  const { icon: Icon, label, max, step } = CHANNELS[channel];

  return (
    <Layout
      alignItems='center'
      autoFlow='column'
      frames='max-content--1fr'
      gap='narrow'
    >
      <div
        className={classNames(
          `${CLASS_NAME}__channel`,
          `${CLASS_NAME}__channel--${channel}`
        )}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Icon aria-hidden />
          </PopoverTrigger>
          <PopoverHint>{t(label)}</PopoverHint>
        </Popover>
        <RangeInput
          aria-label={t(label)}
          disabled={disabled}
          max={max}
          min={0}
          onChange={(event) => {
            color.change(channel, Number(event.target.value));
          }}
          step={step}
          value={color.channels[channel]}
        />
      </div>
    </Layout>
  );
};

export { Channel };
