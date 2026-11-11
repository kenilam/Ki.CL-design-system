import React from 'react';

// Routes
import { useParams } from 'design/router';

// Partials
import { Code } from 'design/mdx/preview/code';
import { usePreviewContext } from 'design/mdx/preview/context';
import { codeOf } from './code-of';

const Snippet: React.FunctionComponent = () => {
  const { applied, literals, names, preset } = usePreviewContext();
  const { slug = '' } = useParams();

  return (
    <Code className='kicl-min-block-size-columns-2'>
      {codeOf(preset.props, literals, applied, slug, names)}
    </Code>
  );
};

export { Snippet };
