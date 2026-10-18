import React from 'react';

import { Text } from 'design/components';

import type { Props } from 'design/components/text/docs/controls';

const Preview: React.FC<Props> = ({ dense, lookLike, ...props }) => {
  const quote = lookLike === 'blockquote' ? lookLike : undefined;

  return (
    <article>
      <Text lookLike={lookLike} {...props}>
        The site is a set of experiments, each on its own page.
      </Text>
      <Text dense={dense} lookLike={quote}>
        Every page is built from the same components.
      </Text>
      <Text dense={dense} lookLike={quote}>
        Each component has a page here that shows it live.
      </Text>
    </article>
  );
};

export { Preview };
