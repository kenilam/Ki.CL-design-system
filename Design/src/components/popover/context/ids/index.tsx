import React, { createContext, useContext, useId } from 'react';

// Spec
import type { PopoverProps } from 'design/components/popover/spec';

// Constants
import { CLASS_NAME } from 'design/components/popover/constants';

type Props = React.PropsWithChildren<Pick<PopoverProps, 'inline'>>;

type Value = {
  id: string;
  anchor: string;
  /** Sets the anchor on the element it's spread on, for parts and composed anchors. */
  anchorStyle: React.CSSProperties;
  inline: boolean;
};

const IdsContext = createContext<Value | null>(null);

const Ids: React.FunctionComponent<Props> = ({ children, inline = false }) => {
  // `useId` output has characters an anchor name or selector won't accept.
  const key = useId().replace(/[^a-zA-Z0-9]/g, '');
  const id = `${CLASS_NAME}--${key}`;
  const anchor = `--${CLASS_NAME}--${key}`;
  const anchorStyle = {
    [`--${CLASS_NAME}--anchor`]: anchor,
  } as React.CSSProperties;

  return (
    <IdsContext.Provider value={{ anchor, anchorStyle, id, inline }}>
      {children}
    </IdsContext.Provider>
  );
};

const usePopoverIds = () => {
  const ids = useContext(IdsContext);

  if (!ids) {
    throw new Error('Popover parts must be used within Popover');
  }

  return ids;
};

export { Ids, usePopoverIds };
