import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  HyperLink,
  Layout,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/mdx/context';

// Constants
import { SECTIONS } from 'design/docs/sections';

type Props = Pick<(typeof SECTIONS)[number], 'path'>;

const Section: React.FunctionComponent<Props> = ({ path }) => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const section = SECTIONS.find((item) => {
    return item.path === path;
  });

  if (!section) {
    return null;
  }

  const { Icon, summary, title } = section;

  return (
    <Card is='li'>
      <Layout alignItems='center' justifyContent='center'>
        <div
          aria-hidden
          className={classNames(
            'kicl-aspect-ratio-video',
            'kicl-background-color-black-pure',
            'kicl-border-radius-sm',
            'kicl-color-white',
            'kicl-font-size-largest'
          )}
        >
          <Icon />
        </div>
      </Layout>
      <CardHeader>
        <CardTitle is='h3'>
          <HyperLink to={parsePath(path)}>{t(title)}</HyperLink>
        </CardTitle>
        <CardDescription>{t(summary)}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export { Section };
