import React from 'react';

// Components
import { Layout } from 'design/components';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { Props as FileInputProps } from 'design/components/input/file';

// Partials
import { DropZone } from './drop-zone';
import { Files } from './files';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/input/file/constants';

type Props = Omit<
  FileInputProps,
  keyof FormItemFieldProps | 'inline' | 'multiple' | 'onChange'
> &
  Pick<React.ComponentProps<'input'>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({
  after: _,
  disabled,
  ...rest
}) => {
  return (
    <Layout autoFlow='row' gap='narrow'>
      <fieldset className={`${CLASS_NAME}__field`} disabled={disabled}>
        <DropZone {...rest} />
        <Files />
      </fieldset>
    </Layout>
  );
};

export { Root };
