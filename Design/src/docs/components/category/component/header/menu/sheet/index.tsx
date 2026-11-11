import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import {
  Button,
  CardTitle,
  HomeLink,
  Sheet,
  SheetFooter,
} from 'design/components';

// Routes
import { useLocation } from 'design/router';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/mdx/context';

// Partials
import { Sidebar } from 'design/docs/components/sidebar';

const MENU_ID = 'kicl-docs-menu';

const MenuSheet: React.FunctionComponent = () => {
  const { parsePath } = useDocsContext();
  const { pathname } = useLocation();
  const t = useCopy();

  return (
    <>
      <Button
        aria-label={t('docs_components_open')}
        block
        size='small'
        variant='secondary'
        popoverTarget={MENU_ID}
      >
        <Tb.TbMenu2 aria-hidden />
      </Button>
      <Sheet
        key={pathname}
        header={<CardTitle is='h2'>{t('docs_components')}</CardTitle>}
        id={MENU_ID}
        side='inline-start'
      >
        <Sidebar />
        <SheetFooter justifyContent='start'>
          <HomeLink showLabel to={parsePath()} />
        </SheetFooter>
      </Sheet>
    </>
  );
};

export { MenuSheet };
