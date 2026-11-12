import React from 'react';

// Libraries
import classNames from 'classnames';
import type { FieldValues } from 'react-hook-form';

// Spec
import type { FormProps } from 'design/components/form/spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--form';

type Props = Pick<
  FormProps<FieldValues>,
  | 'action'
  | 'aria-describedby'
  | 'aria-label'
  | 'aria-labelledby'
  | 'autoComplete'
  | 'children'
  | 'className'
  | 'id'
  | 'method'
  | 'name'
  | 'noValidate'
  | 'onSubmit'
>;

const Root: React.FunctionComponent<Props> = ({
  className,
  noValidate = true,
  onSubmit,
  ...rest
}) => {
  return (
    <form
      {...rest}
      className={classNames(CLASS_NAME, className)}
      noValidate={noValidate}
      onSubmit={
        onSubmit ??
        ((event) => {
          event.preventDefault();
        })
      }
    />
  );
};

export { Root };
