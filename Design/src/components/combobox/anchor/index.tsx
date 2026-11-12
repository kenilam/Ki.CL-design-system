import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { usePopover } from 'design/components';

// Spec
import type { ComboboxAnchorProps } from 'design/components/combobox/spec';

// Constants
import { CLASS_NAME as COMBOBOX } from 'design/components/combobox/constants';

// Helpers
import { mergeRefs } from 'design/helper';

// Context
import { useComboboxNodes } from 'design/components/combobox/context';

// Partials
import { useKeyDown } from './use-key-down';

// Styles
import './styles.scss';

const CLASS_NAME = `${COMBOBOX}__anchor`;

const ComboboxAnchor: React.FC<ComboboxAnchorProps> = ({ children }) => {
  const { anchor } = useComboboxNodes();
  const { anchorStyle } = usePopover();

  useKeyDown();

  const child = React.Children.only(children);

  return React.cloneElement(child, {
    className: classNames(CLASS_NAME, child.props.className),
    ref: mergeRefs(anchor, child.props.ref),
    style: { ...anchorStyle, ...child.props.style },
  });
};

ComboboxAnchor.displayName = 'ComboboxAnchor';

export { ComboboxAnchor };
