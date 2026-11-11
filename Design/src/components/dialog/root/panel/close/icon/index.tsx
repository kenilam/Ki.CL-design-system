import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Context
import { useDialog } from 'design/components/dialog/context';

const Icon: React.FunctionComponent = () => {
  const { closeIcon: CloseIcon } = useDialog();

  return CloseIcon ? <CloseIcon aria-hidden /> : <Tb.TbX aria-hidden />;
};

export { Icon };
