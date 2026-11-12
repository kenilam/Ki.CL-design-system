import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';
import './styles.quote.scss';
import './styles.code.scss';
import './styles.edit.scss';

const CLASS_NAME = 'kicl--components--text';

const Text = React.forwardRef<HTMLElement, Spec.Props>(
  (
    {
      children,
      dense,
      is = 'p',
      level = 'neutral',
      lookLike,
      unstyled,
      variant,
      ...rest
    },
    ref
  ) => {
    const looksLikeHeading = /^h[1-6]$/.test(lookLike ?? '');

    const className = unstyled
      ? rest.className
      : classNames(
          CLASS_NAME,
          `${CLASS_NAME}--level--${level}`,
          `${CLASS_NAME}--variant--${variant ?? 'primary'}`,
          {
            [`kicl-look-like-${lookLike}`]: lookLike,
            [`kicl-look-like-${lookLike}--variant--${variant}`]:
              looksLikeHeading ? variant : null,
            [`${CLASS_NAME}--is-dense`]: dense,
          },
          rest.className
        );

    const Component = is;

    return (
      <Component
        {...(rest as React.HTMLAttributes<HTMLElement>)}
        className={className}
        data-is={is}
        ref={ref as never}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

export type {
  Props as TextProps,
  TextIs,
  TextLevel,
  TextLookLike,
} from './spec';
export { Text };
