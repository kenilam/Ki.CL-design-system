import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { useFormItemControl } from 'design/components';

// Helpers
import { mergeRefs } from 'design/helper';

// Context
import { useFieldContext } from 'design/components/input/file/field/context';

// Constants
import { CLASS_NAME } from 'design/components/input/file/constants';

type Props = Pick<
  React.ComponentProps<'input'>,
  'aria-describedby' | 'aria-invalid' | 'id' | 'ref' | 'required' | 'title'
>;

const useControl = ({ ref, ...rest }: Props) => {
  const control = useFormItemControl(rest);
  const field = useFieldContext();

  return {
    ...control,
    className: classNames(
      `${CLASS_NAME}__control`,
      'kicl-inset-0',
      'kicl-opacity-0',
      'kicl-position-absolute'
    ),
    multiple: field.multiple,
    onChange: field.change,
    onDragEnter: () => field.setDragging(true),
    onDragLeave: () => field.setDragging(false),
    onDrop: () => field.setDragging(false),
    ref: mergeRefs(field.node, ref),
    title: rest.title ?? '',
    type: 'file',
  };
};

export { useControl };
