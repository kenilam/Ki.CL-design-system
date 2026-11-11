import React from 'react';

// Components
import { SegmentedItem } from 'design/components';

type Props = { option: string | number };

const Option: React.FunctionComponent<Props> = ({ option }) => {
  return <SegmentedItem value={String(option)}>{option}</SegmentedItem>;
};

export { Option };
