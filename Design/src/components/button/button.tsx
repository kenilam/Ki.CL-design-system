import React from 'react';

// Components
import { NameHint } from 'design/components';
import { Layout } from 'design/components/layout';
import { truncateText } from 'design/helper';

// Spec
import * as Spec from './spec';

// Class names
import { getClassName } from './class-name';
import { LAYOUT, hasText } from './class-names';

// Partials
import { getBusyAttributes } from './busy-attributes';
import { getButtonContent } from './content';

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
    busy,
    children,
    className,
    disabled,
    display,
    iconOnlyUpTo,
    level,
    lookLikeHyperLink = false,
    onClick,
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

  const content = getButtonContent(props);
  const label = hasText(before, children, after)
    ? undefined
    : rest['aria-label'];

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
      <NameHint label={label}>
        <button
          {...rest}
          {...getBusyAttributes({ busy, onClick })}
          className={getClassName(props)}
          disabled={disabled}
          ref={ref}
          type={type}
        >
          {truncateText(content.before)}
          {truncateText(content.children)}
          {truncateText(content.after)}
        </button>
      </NameHint>
    </Layout>
  );
});

Button.displayName = 'Button';

export { Button };
