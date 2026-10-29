import React from 'react';

import { Button, CardTitle, Sheet, Text } from 'design/components';

import type { Props } from 'design/components/sheet/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button popoverTarget='sheet-long-content'>Open</Button>
      <Sheet
        footer={
          <Button popoverTarget='sheet-long-content' popoverTargetAction='hide'>
            Done
          </Button>
        }
        header={<CardTitle is='h2'>About Daylight</CardTitle>}
        id='sheet-long-content'
        {...props}
      >
        <Text>
          Daylight draws where it&apos;s day and where it&apos;s night on Earth
          right now, from the sun&apos;s position at this minute.
        </Text>
        <Text>
          The line between them is the terminator. It moves west at about 1,670
          kilometres an hour at the equator, and slower nearer the poles.
        </Text>
        <Text>
          In June the north is tilted towards the sun, so the far north has no
          night at all, and the far south has no day.
        </Text>
        <Text>
          In December it&apos;s the other way round. Twice a year, at the
          equinoxes, day and night are close to equal everywhere.
        </Text>
        <Text>
          Twilight is the band beside the line, where the sun is below the
          horizon but still lights the sky.
        </Text>
        <Text>
          The map updates every minute, so leaving it open shows the line move.
        </Text>
        <Text>
          Daylight draws where it&apos;s day and where it&apos;s night on Earth
          right now, from the sun&apos;s position at this minute.
        </Text>
        <Text>
          The line between them is the terminator. It moves west at about 1,670
          kilometres an hour at the equator, and slower nearer the poles.
        </Text>
        <Text>
          In June the north is tilted towards the sun, so the far north has no
          night at all, and the far south has no day.
        </Text>
        <Text>
          In December it&apos;s the other way round. Twice a year, at the
          equinoxes, day and night are close to equal everywhere.
        </Text>
        <Text>
          Twilight is the band beside the line, where the sun is below the
          horizon but still lights the sky.
        </Text>
        <Text>
          The map updates every minute, so leaving it open shows the line move.
        </Text>
      </Sheet>
    </>
  );
};

export { Preview };
