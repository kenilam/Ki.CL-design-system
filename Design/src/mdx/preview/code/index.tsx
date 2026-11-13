import React from 'react';

// Components
import {
  Card,
  CardAction,
  CardTitle,
  CodeBlock,
  type CodeBlockProps,
  CopyButton,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

type Props = CodeBlockProps & { title?: string };

const Code: React.FunctionComponent<Props> = ({
  children,
  className,
  language,
  title,
}) => {
  const t = useCopy();

  return (
    <Card
      gap='narrow'
      header={
        <>
          <CardTitle is='h3'>{title ?? t('docs_code')}</CardTitle>
          <CardAction>
            <CopyButton size='small' value={children} variant='secondary' />
          </CardAction>
        </>
      }
      is='section'
      size='default'
    >
      <CodeBlock className={className} language={language}>
        {children}
      </CodeBlock>
    </Card>
  );
};

export { Code };
