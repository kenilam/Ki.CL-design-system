import type React from 'react';
import { useCallback, useLayoutEffect, useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { useFormItemControl } from 'design/components';

// Helpers
import { mergeRefs } from 'design/helper';

// Constants
import { CLASS_NAME } from 'design/components/select/constants';

// Context
import { useSelect } from 'design/components/select/context';

import type { Props } from 'design/components/select/root';

type Options = Omit<Props, 'children' | 'className' | 'inline' | 'placement'>;

const useControl = ({
  defaultValue,
  onChange,
  onValueChange,
  placeholder,
  ref,
  value,
  ...rest
}: Options) => {
  const control = useFormItemControl(rest);
  const { setSelectedContent } = useSelect();
  const select = useRef<HTMLSelectElement>(null);
  const busy = rest['aria-busy'] === true || rest['aria-busy'] === 'true';
  const attach = useCallback(
    (element: HTMLSelectElement | null) => {
      mergeRefs(ref, select)(element);
    },
    [ref]
  );

  useLayoutEffect(() => {
    setSelectedContent(select.current?.selectedOptions[0]?.label);
  });

  return {
    ...rest,
    ...control,
    className: classNames(
      `${CLASS_NAME}__control`,
      'kicl-appearance-none',
      'kicl-block-size-full',
      'kicl-inline-size-full',
      'kicl-inset-0',
      'kicl-opacity-0',
      'kicl-position-absolute',
      { 'kicl-cursor-progress': busy }
    ),
    defaultValue:
      value === undefined && placeholder !== undefined
        ? (defaultValue ?? '')
        : defaultValue,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedContent(event.currentTarget.selectedOptions[0]?.label);
      onChange?.(event);
      onValueChange?.(event.currentTarget.value);
    },
    ref: attach,
    value,
  };
};

export { useControl };
