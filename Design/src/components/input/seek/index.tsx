import React from 'react';

// Components
import { Layout, RangeInput, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Props } from './spec';

// Partials
import { clockOf } from './clock-of';
import { Time } from './time';

/** The elapsed time, a slider to move through the track, and its length. */
const SeekInput: React.FunctionComponent<Props> = ({
  className,
  disabled,
  duration,
  elapsed,
  onSeek,
}) => {
  const t = useCopy();
  const length = Math.floor(duration);
  const position = Math.min(length, Math.max(0, Math.floor(elapsed)));

  return (
    <Layout
      alignItems='center'
      autoFlow='column'
      frames='max-content--auto--max-content'
      gap='narrow'
    >
      <Text className={className} dense is='p' variant='secondary'>
        <Time seconds={position} />
        <RangeInput
          aria-label={t('label_playback_position')}
          aria-valuetext={t('playback_position', {
            duration: clockOf(length),
            elapsed: clockOf(position),
          })}
          disabled={disabled || !length}
          max={length}
          min={0}
          onChange={(event) => {
            onSeek?.(Number(event.target.value));
          }}
          step={1}
          value={position}
        />
        <Time seconds={length} />
      </Text>
    </Layout>
  );
};

export { SeekInput, type Props as SeekInputProps };
