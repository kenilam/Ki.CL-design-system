import React from 'react';

import { HyperLink, ListItem } from 'design/components';

import { useCopy } from 'design/locales/use-copy';

import { useDocsContext } from 'design/mdx/context';

import { useParams } from 'design/router';

import { COMPONENTS_PATH as PATH } from 'design/docs/paths';

type Props = { part: string };

const VARIANTS = { true: 'secondary', false: 'tertiary' } as const;

const Part: React.FunctionComponent<Props> = ({ part }) => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const { category, component, part: shown } = useParams();

  return (
    <ListItem>
      <HyperLink
        className='kicl-inline-size-full'
        lookLikeButton
        to={parsePath(`${PATH}/${category}/${component}/${part}`)}
        variant={VARIANTS[String(part === shown) as 'false' | 'true']}
      >
        {t('component', { context: `${component}_${part}` })}
      </HyperLink>
    </ListItem>
  );
};

export { Part };
