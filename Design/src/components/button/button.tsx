import React from 'react';

// Components
import { Layout } from 'design/components/layout';
import { truncateText } from 'design/helper';

// Spec
import * as Spec from './spec';

// Class names
import { getClassName } from './class-name';
import { LAYOUT } from './class-names';

// Styles
import './styles.scss';
import './styles.size.scss';
import './styles.icon.scss';
import './styles.variant.scss';
import './styles.disabled.scss';

const Button = React.forwardRef<HTMLButtonElement, Spec.Props>((props, ref) => {
  const {
    after,
    before,
    block,
    children,
    className,
    disabled,
    level,
    lookLikeHyperLink = false,
    onClick: clickHandler,
    size,
    type = 'button',
    unstyled,
    variant,

    alignContent = LAYOUT.alignContent,
    alignItems = LAYOUT.alignItems,
    autoFlow = LAYOUT.autoFlow,
    gap = LAYOUT.gap,
    justifyContent = LAYOUT.justifyContent,
    justifyItems = LAYOUT.justifyItems,

    ...rest
  } = props;

  return (
    <Layout
      alignContent={alignContent}
      alignItems={alignItems}
      autoFlow={autoFlow}
      display={lookLikeHyperLink ? 'inline-grid' : undefined}
      gap={gap}
      justifyContent={justifyContent}
      justifyItems={justifyItems}
    >
      <button
        {...rest}
        className={getClassName(props)}
        disabled={disabled}
        onClick={clickHandler}
        ref={ref}
        type={type}
      >
        {truncateText(before)}
        {truncateText(children)}
        {truncateText(after)}
      </button>
    </Layout>
  );
});

Button.displayName = 'Button';

export { Button };
