import React, { useLayoutEffect, useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { useFormItemControl } from 'design/components';

// Helpers
import { mergeRefs } from 'design/helper';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/select/constants';

// Context
import { useSelect } from 'design/components/select/context';

// Partials
import { Placeholder } from 'design/components/select/root/placeholder';
import { Face } from './face';
import { Options } from './options';

import type { Props } from 'design/components/select/root';

const Auto: React.FunctionComponent<Props> = ({
  children,
  className,
  defaultValue,
  inline,
  onChange,
  onValueChange,
  placeholder,
  placement,
  ref,
  value,
  ...rest
}) => {
  const control = useFormItemControl(rest);
  const { setSelectedContent } = useSelect();
  const select = useRef<HTMLSelectElement>(null);

  useLayoutEffect(() => {
    setSelectedContent(select.current?.selectedOptions[0]?.label);
  });

  return (
    <span
      className={classNames(
        CLASS_NAME,
        'kicl-display-inline-flex',
        'kicl-inline-size-fit',
        'kicl-position-relative',
        {
          [`${CLASS_NAME}--inline`]: inline,
          'kicl-font-size-small': !inline,
        },
        className
      )}
    >
      <Face>{children}</Face>
      <select
        ref={mergeRefs(ref, select)}
        className={classNames(
          `${CLASS_NAME}__control`,
          'kicl-block-size-full',
          'kicl-inline-size-full',
          'kicl-inset-0',
          'kicl-position-absolute'
        )}
        value={value}
        defaultValue={
          value === undefined && placeholder !== undefined
            ? (defaultValue ?? '')
            : defaultValue
        }
        onChange={(event) => {
          setSelectedContent(event.currentTarget.selectedOptions[0]?.label);
          onChange?.(event);
          onValueChange?.(event.currentTarget.value);
        }}
        {...rest}
        {...control}
      >
        <Options>{children}</Options>
        {placeholder !== undefined ? (
          <Placeholder>{placeholder}</Placeholder>
        ) : null}
      </select>
    </span>
  );
};

export { Auto };
