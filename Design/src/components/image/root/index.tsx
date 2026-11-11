import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import type * as Spec from 'design/components/image/spec';

// Context
import { useImage } from 'design/components/image/context';

// Constants
import { CLASS_NAME } from 'design/components/image/constants';

// Partials
import { Alt } from './alt';
import { Loading } from './loading';
import { Picture } from './picture';
import { Placeholder } from './placeholder';

type Props = Omit<
  Spec.Props,
  'alt' | 'data' | 'loading' | 'onError' | 'onLoad' | 'placeholder'
>;

const Root: React.FunctionComponent<Props> = ({ className, ...props }) => {
  const { hasError, isLoading } = useImage();

  return (
    <span
      {...props}
      className={classNames(
        CLASS_NAME,
        'kicl-overflow-hidden',
        {
          [`${CLASS_NAME}--is-loading`]: isLoading,
          [`${CLASS_NAME}--has-error`]: hasError,
        },
        className
      )}
    >
      <Picture />
      <Alt />
      <Placeholder />
      <Loading />
    </span>
  );
};

export { Root };
