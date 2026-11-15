import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

// Partials
import { Media } from './media';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

const Heading = React.forwardRef<HTMLHeadingElement, Spec.Props>(
  (
    {
      children,
      className: origin = '',
      dense,
      is = 'h1',
      level,
      lookLike,
      media,
      ...rest
    },
    ref
  ) => {
    const className = classNames(
      CLASS_NAME,
      {
        [`${CLASS_NAME}--has-media`]: media,
        [`${CLASS_NAME}--is-dense`]: dense,
        [`${CLASS_NAME}--level--${level}`]: level,
        [`${CLASS_NAME}--look-like--display`]: lookLike === 'display',
        [`kicl-text-transform-uppercase`]: lookLike === 'display',
        [`kicl-look-like-${lookLike}`]:
          lookLike && lookLike !== is && lookLike !== 'display',
      },
      origin
    );

    const Component = is;

    return (
      <Component
        {...(rest as React.HTMLAttributes<HTMLHeadingElement>)}
        className={className}
        ref={ref}
      >
        {media ? <Media media={media}>{children}</Media> : children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

type HeadingProps = Spec.Props;

export { Heading, type HeadingProps };
