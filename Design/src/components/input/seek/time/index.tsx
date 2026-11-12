import React from 'react';

// Components
import { Text } from 'design/components';

// Partials
import { clockOf } from 'design/components/input/seek/clock-of';

type Props = { seconds: number };

const Time: React.FunctionComponent<Props> = ({ seconds }) => {
  return (
    <Text dateTime={`PT${seconds}S`} is='time'>
      {clockOf(seconds)}
    </Text>
  );
};

export { Time };
