import classNames from 'classnames';

import type { PopoverContentProps } from './spec';

import { CLASS_NAME as POPOVER } from './constants';

const CLASS_NAME = `${POPOVER}__content`;

type Props = Pick<
  PopoverContentProps,
  'className' | 'offset' | 'placement' | 'variant'
>;

const getContentClassNames = ({
  className,
  offset = 'narrow',
  placement = 'block-end',
  variant = 'primary',
}: Props) => {
  const [axis, edge, align = 'start'] = placement.split('-');

  return classNames(
    'kicl-font-size-small',
    CLASS_NAME,
    `${CLASS_NAME}--${axis}-${edge}--${align}`,
    `${CLASS_NAME}--offset--${offset}`,
    `${CLASS_NAME}--variant--${variant}`,
    'kicl-box-shadow-overlay',
    variant !== 'primary' ? 'kicl-backdrop-blur' : null,
    className
  );
};

export { CLASS_NAME, getContentClassNames };
