import React, { useEffect } from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import type { ComboboxAnchorProps } from 'design/components/combobox/spec';

// Constants
import {
  CLASS_NAME as COMBOBOX,
  FOCUSABLE,
} from 'design/components/combobox/constants';

// Helpers
import { mergeRefs } from 'design/helper';

// Constants
import { CLASS_NAME as POPOVER } from 'design/components/popover/constants';

// Context
import { focusables, useCombobox } from 'design/components/combobox/context';
import { usePopover } from 'design/components/popover/context';

const CLASS_NAME = `${COMBOBOX}__anchor`;

const ComboboxAnchor: React.FC<ComboboxAnchorProps> = ({ children }) => {
  const combobox = useCombobox();
  const popover = usePopover();
  const { open } = popover;

  useEffect(() => {
    const node = combobox.anchor.current;
    if (!node || !open) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === 'ArrowDown') {
        const [first] = focusables(combobox.content.current, FOCUSABLE);
        if (first) {
          event.preventDefault();
          first.focus();
        }
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        combobox.close();
      }
    };

    node.addEventListener('keydown', onKeyDown);
    return () => {
      node.removeEventListener('keydown', onKeyDown);
    };
  }, [combobox, open]);

  const child = React.Children.only(children);

  return React.cloneElement(child, {
    className: classNames(CLASS_NAME, child.props.className),
    ref: mergeRefs(combobox.anchor, child.props.ref),
    style: {
      [`--${POPOVER}--anchor`]: popover.anchor,
      ...child.props.style,
    } as React.CSSProperties,
  });
};

ComboboxAnchor.displayName = 'ComboboxAnchor';

export { ComboboxAnchor };
