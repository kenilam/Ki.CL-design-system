import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { Props as FileInputProps } from 'design/components/input/file';

// Context
import { useFieldContext } from 'design/components/input/file/field/context';

// Partials
import { Prompt } from './prompt';
import { useControl } from './use-control';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/input/file/constants';

type Props = Omit<
  FileInputProps,
  | keyof FormItemFieldProps
  | 'after'
  | 'disabled'
  | 'inline'
  | 'multiple'
  | 'onChange'
> &
  Pick<React.ComponentProps<'input'>, 'ref'>;

const DropZone: React.FunctionComponent<Props> = ({
  className,
  ref,
  style,
  ...rest
}) => {
  const { dragging } = useFieldContext();
  const control = useControl({ ...rest, ref });

  return (
    <Layout
      alignContent='center'
      gap='narrow'
      justifyItems='center'
      autoFlow='row'
    >
      <label
        className={classNames(
          CLASS_NAME,
          `${CLASS_NAME}__drop-zone`,
          { [`${CLASS_NAME}__drop-zone--dragging`]: dragging },
          'kicl-backdrop-blur',
          'kicl-padding',
          'kicl-position-relative',
          'kicl-text-align-center',
          className
        )}
        style={style}
      >
        <input {...rest} {...control} />
        <Prompt />
      </label>
    </Layout>
  );
};

export { DropZone };
