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
    { accent, children, dense, is = 'p', lookLike, unstyled, variant, ...rest },
    ref
  ) => {
    // A heading look has its own quieter variant; the rest take Text's.
    const looksLikeHeading = /^h[1-6]$/.test(lookLike ?? '');

    const className = classNames(
      {
        [CLASS_NAME]: !unstyled,
        [`kicl-look-like-${lookLike}`]: !unstyled && lookLike,
        [`${CLASS_NAME}--variant--${variant}`]:
          !unstyled && !looksLikeHeading && variant,
        [`${CLASS_NAME}--accent--${accent}`]: !unstyled && accent,
        [`kicl-look-like-${lookLike}--variant--${variant}`]:
          !unstyled && looksLikeHeading && variant,
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
  TextAccent,
  TextIs,
  TextLookLike,
} from './spec';
export { Text };
