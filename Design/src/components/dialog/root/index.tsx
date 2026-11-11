import React, { useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Helpers
import { mergeRefs } from 'design/helper';

// Constants
import { CLASS_NAME } from 'design/components/dialog/constants';

// Partials
import { Panel } from './panel';
import { useRoot } from './use-root';

type Props = Omit<React.ComponentProps<'dialog'>, 'id' | 'open'>;

const Root: React.FunctionComponent<Props> = ({
  children,
  className,
  ref,
  ...rest
}) => {
  const node = useRef<HTMLDialogElement>(null);
  const dialog = useRoot(
    node,
    Boolean(rest['aria-label'] || rest['aria-labelledby'])
  );

  return (
    <dialog
      aria-labelledby={dialog.labelledBy}
      {...rest}
      id={dialog.id}
      ref={mergeRefs(node, ref)}
      className={classNames(
        CLASS_NAME,
        dialog.modifiers,
        'kicl-min-block-size-screen',
        'kicl-overscroll-behavior-contain',
        className
      )}
      closedby={dialog.closedby}
    >
      {dialog.shown ? <Panel>{children}</Panel> : null}
    </dialog>
  );
};

export { Root };
