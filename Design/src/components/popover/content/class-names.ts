import classNames from 'classnames';

import type { PopoverContentProps } from '../spec';

import { CLASS_NAME as POPOVER } from '../constants';

const CLASS_NAME = `${POPOVER}__content`;

type Props = Pick<
  PopoverContentProps,
  'className' | 'offset' | 'placement' | 'variant'
>;

/**
 * The panel's look and position, shared by the click panel and the hint so
 * both read placement and offset the same way.
 */
const getContentClassNames = ({
  className,
  offset = 'narrow',
  placement = 'block-end',
  variant = 'default',
}: Props) => {
  // `block-end` reads as `block-end-start`: the side, then the alignment.
  const [axis, edge, align = 'start'] = placement.split('-');

  return classNames(
    CLASS_NAME,
    `${CLASS_NAME}--${axis}-${edge}--${align}`,
    `${CLASS_NAME}--offset--${offset}`,
    `${CLASS_NAME}--variant--${variant}`,
    className
  );
};

export { CLASS_NAME, getContentClassNames };
