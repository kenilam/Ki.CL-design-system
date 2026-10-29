import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--text';

const Text = React.forwardRef<HTMLElement, Spec.Props>(
  (
    { children, dense, is = 'p', level, lookLike, unstyled, variant, ...rest },
    ref
  ) => {
    const looksLikeHeading = /^h[1-6]$/.test(lookLike ?? '');

    const className = classNames(
      {
        [CLASS_NAME]: !unstyled,
        [`kicl-look-like-${lookLike}`]: !unstyled ? lookLike : null,
        [`${CLASS_NAME}--variant--${variant}`]:
          !unstyled && !looksLikeHeading ? variant : null,
        [`${CLASS_NAME}--level--${level}`]: !unstyled ? level : null,
        [`kicl-look-like-${lookLike}--variant--${variant}`]:
          !unstyled && looksLikeHeading ? variant : null,
        [`${CLASS_NAME}--is-dense`]: !unstyled && dense,
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
