import React from 'react';

// Constants
import { ICONS } from 'design/icons/masks/constants';

type Props = { id: keyof typeof ICONS };

const Mask: React.FunctionComponent<Props> = ({ id }) => {
  const Icon = ICONS[id];

  return <Icon />;
};

export { Mask };
