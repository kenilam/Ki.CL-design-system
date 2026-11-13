import React from 'react';

// Libraries
import classNames from 'classnames';
import { Highlight, themes } from 'prism-react-renderer';

// Components
import { Text } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Partials
import { renderLines } from './render-lines';

// Spec
import * as Spec from './spec';

const CodeBlock: React.FunctionComponent<Spec.Props> = ({
  children,
  className,
  language = 'tsx',
}) => {
  const { theme } = useResponsive();

  return (
    <Highlight
      code={children}
      language={language}
      theme={theme === 'dark' ? themes.vsDark : themes.vsLight}
    >
      {(highlight) => {
        return (
          <Text
            className={classNames(
              'kicl-inline-size-full',
              'kicl-line-height-wide',
              className
            )}
            is='pre'
          >
            <Text is='code'>{renderLines(highlight)}</Text>
          </Text>
        );
      }}
    </Highlight>
  );
};

export { CODE_BLOCK_LANGUAGES } from './spec';
export type { Props as CodeBlockProps } from './spec';
export { CodeBlock };
