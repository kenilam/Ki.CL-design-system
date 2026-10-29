import React, { useLayoutEffect, useRef, useState } from 'react';

// Libraries
import classNames from 'classnames';
import * as Ri from 'react-icons/ri';

// Components
import { Button } from 'design/components/button';
import { HyperLink } from 'design/components/hyper-link';
import { List } from 'design/components/list';
import { ListItem } from 'design/components/list-item';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'design/components/popover';
import { Text } from 'design/components/text';

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

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--breadcrumb';
const CRUMB_CLASS_NAME = `${CLASS_NAME}__crumb`;

const CRUMB = {
  alignItems: 'center',
  autoFlow: 'column',
  gap: 'narrower',
} as const;

/**
 * Where a page sits, on one line. While the page's name is cut short, the
 * crumbs fold into a menu one at a time from the start, and a crumb without a
 * link is left out of it. Once every crumb has folded, the name truncates.
 */
const Breadcrumb = React.forwardRef<HTMLElement, Spec.Props>(
  ({ className, crumbs, current, ...rest }, ref) => {
    const t = useCopy();
    const list = useRef<HTMLOListElement>(null);
    const { node, rect } = useResizeObserver<HTMLElement>();

    // How many crumbs have folded, for the width it was worked out at.
    const [fit, setFit] = useState({ folded: 0, width: 0 });
    const width = Math.round(rect?.width ?? 0);
    const folded = fit.width === width ? fit.folded : 0;
    const isFull = folded === crumbs.length;

    const menu = crumbs
      .slice(0, folded)
      .filter((crumb): crumb is Spec.Crumb & Spec.Page => Boolean(crumb.to));
    const shown = crumbs.slice(folded);

    /*
     * Measured before paint. A new width starts again with every crumb
     * shown, so a wider screen gets them back. While the page's name is cut
     * short, or the line still overflows, one more crumb folds. Only JS can
     * tell that text is cut short.
     */
    useLayoutEffect(() => {
      const element = list.current;
      const page = element?.querySelector('[aria-current="page"]');

      if (!element || !page || !width) {
        return;
      }

      const isCut =
        page.scrollWidth > page.clientWidth ||
        element.scrollWidth > element.clientWidth;

      if (isCut && !isFull) {
        setFit({ folded: folded + 1, width });
      } else if (fit.width !== width) {
        setFit({ folded, width });
      }
    }, [crumbs, current, fit.width, folded, isFull, width]);

    return (
      <nav
        aria-label={t('label_breadcrumb')}
        className={classNames(CLASS_NAME, 'kicl-min-inline-size-0', className)}
        ref={mergeRefs(ref, node)}
        {...rest}
      >
        <List
          alignItems='center'
          autoFlow='row'
          className='kicl-overflow-hidden'
          display='flex'
          gap='narrower'
          is='ol'
          ref={list}
        >
          {menu.length > 0 && (
            <ListItem className={CRUMB_CLASS_NAME}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    aria-label={t('label_breadcrumb_more')}
                    className={classNames('kicl-border-radius-sm')}
                    unstyled
                  >
                    <Ri.RiMoreLine aria-hidden />
                  </Button>
                </PopoverTrigger>
                <PopoverContent placement='block-end-start'>
                  <Menu crumbs={menu} />
                </PopoverContent>
              </Popover>
            </ListItem>
          )}
          {shown.map(({ name, to }, index) => (
            <ListItem className={CRUMB_CLASS_NAME} key={name} {...CRUMB}>
              {(menu.length > 0 || index > 0) && (
                <Ri.RiArrowRightSLine aria-hidden />
              )}
              {to ? (
                <HyperLink className='kicl-text-nowrap' to={to}>
                  {name}
                </HyperLink>
              ) : (
                <Text
                  className='kicl-text-nowrap'
                  is='span'
                  variant='secondary'
                >
                  {name}
                </Text>
              )}
            </ListItem>
          ))}
          {/* The page's name is what gives way: the arrow keeps its width. */}
          <ListItem
            {...CRUMB}
            className='kicl-min-inline-size-0'
            frames='max-content--1fr'
          >
            {(menu.length > 0 || shown.length > 0) && (
              <Ri.RiArrowRightSLine aria-hidden />
            )}
            <Text
              aria-current='page'
              className='kicl-font-weight-bold kicl-text-truncate'
              is='span'
            >
              {current}
            </Text>
          </ListItem>
        </List>
      </nav>
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
