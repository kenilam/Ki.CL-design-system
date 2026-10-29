import React, { useLayoutEffect, useState } from 'react';

// Libraries
import classNames from 'classnames';
import * as Ri from 'react-icons/ri';

// Components
import { Button } from 'design/components/button';
import { HyperLink } from 'design/components/hyper-link';
import { Layout } from 'design/components/layout';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'design/components/popover';

// Helpers
import { mergeRefs } from 'design/helper';

// Hooks
import { useResizeObserver } from 'design/hooks/use-resize-observer';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { Menu } from './menu';

// Spec
import * as Spec from './spec';

const CLASS_NAME = 'kicl--components--breadcrumb';

const Breadcrumb = React.forwardRef<HTMLElement, Spec.Props>(
  ({ className, crumbs, current, ...rest }, ref) => {
    const t = useCopy();
    const { node, rect } = useResizeObserver<HTMLElement>();

    const [fit, setFit] = useState({ folded: 0, width: 0 });
    const width = Math.round(rect?.width ?? 0);
    const fitted = fit.width === width ? fit.folded : 0;
    const isFull = fitted === crumbs.length;

    const menu = crumbs
      .slice(0, fitted)
      .filter((crumb): crumb is Spec.Crumb & Spec.Page => {
        return Boolean(crumb.to);
      });

    const trail = [
      menu.length > 0 ? (
        <Popover key='menu'>
          <PopoverTrigger asChild>
            <Button
              aria-label={t('label_breadcrumb_more')}
              className='kicl-border-radius-sm'
              unstyled
            >
              <Ri.RiMoreLine aria-hidden />
            </Button>
          </PopoverTrigger>
          <PopoverContent placement='block-end-start'>
            <Menu crumbs={menu} />
          </PopoverContent>
        </Popover>
      ) : null,
      ...crumbs.slice(fitted).map(({ name, to }) => {
        return to ? (
          <HyperLink className='kicl-text-nowrap' key={name} to={to}>
            {name}
          </HyperLink>
        ) : null;
      }),
      <HyperLink className='kicl-text-nowrap' key={current} to=''>
        {current}
      </HyperLink>,
    ].filter((crumb) => {
      return crumb !== null;
    });

    // CSS can't tell when text is cut short, so this folds one more crumb per
    // pass until nothing overflows.
    useLayoutEffect(() => {
      const element = node.current;
      const page = element?.querySelector('[aria-current="page"]');

      if (!element || !page || !width) {
        return;
      }

      const isCut =
        page.scrollWidth > page.clientWidth ||
        element.scrollWidth > element.clientWidth;

      let folded = fitted;

      if (isCut && !isFull) {
        folded = fitted + 1;
      }

      setFit({ folded, width });
    }, [crumbs, current, fitted, isFull, node, width]);

    return (
      <Layout
        alignItems='center'
        autoFlow='column'
        gap='narrower'
        justifyContent='start'
      >
        <nav
          aria-label={t('label_breadcrumb')}
          className={classNames(CLASS_NAME, 'kicl-overflow-hidden', className)}
          ref={mergeRefs(ref, node)}
          {...rest}
        >
          {trail.map((crumb, index) => {
            return (
              <React.Fragment key={crumb.key}>
                {index > 0 ? <Ri.RiArrowRightSLine aria-hidden /> : null}
                {crumb}
              </React.Fragment>
            );
          })}
        </nav>
      </Layout>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export type {
  Crumb,
  Page as BreadcrumbPage,
  Props as BreadcrumbProps,
} from './spec';
export { Breadcrumb };
