import React from 'react';

// Libraries
import classNames from 'classnames';

// Helpers
import { mergeRefs } from 'design/helper';

// Context
import { Provider, usePopoverTrigger } from 'design/components/popover/context';

// Partials
import { PopoverHint } from 'design/components/popover/hint';
import { PopoverTrigger } from 'design/components/popover/trigger';

type Child = React.ReactElement<
  Pick<React.ComponentProps<'button'>, 'className'> & {
    ref?: React.Ref<HTMLElement>;
  }
>;

type Props = Pick<React.ComponentProps<'button'>, 'className'> & {
  children: Child;
  label?: string;
  ref?: React.Ref<HTMLElement>;
};

const NameHint: React.FunctionComponent<Props> = ({
  children,
  className,
  label,
  ref,
}) => {
  const trigger = usePopoverTrigger();
  const refs = mergeRefs(ref, children.props.ref);
  const element = React.cloneElement(children, {
    className: classNames(className, children.props.className),
    ref: refs,
  });

  if (!label) {
    return element;
  }

  const hint = <PopoverHint aria-hidden>{label}</PopoverHint>;

  if (trigger) {
    return (
      <>
        {element}
        {hint}
      </>
    );
  }

  return (
    <Provider inline>
      <PopoverTrigger asChild ref={refs}>
        {element}
      </PopoverTrigger>
      {hint}
    </Provider>
  );
};

export { NameHint };
