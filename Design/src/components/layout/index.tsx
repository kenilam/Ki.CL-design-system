import React, { PropsWithChildren } from 'react';

// Libraries
import classNames from 'classnames';

// Helpers
import { mergeRefs } from 'design/helper';

// Spec
import * as Spec from './spec';

// Class names
import { getLayoutClassNames } from './class-names';

type Props = PropsWithChildren<Spec.Props>;

const Layout = React.forwardRef<HTMLElement, Props>((layout, ref) => {
  const {
    children,
    alignContent,
    alignItems,
    autoFlow,
    columns,
    display,
    fill,
    frames,
    fullScreen,
    gap,
    justifyContent,
    justifyItems,
    span,
    wrap,
    ...rest
  } = layout;
  const className = getLayoutClassNames(layout);

  const Element = React.Children.only(children);

  if (!Element) {
    return Element;
  }

  if (!React.isValidElement(Element)) {
    return Element;
  }

  const props: Props = Element.props || {};
  const childRef = (props as { ref?: React.Ref<HTMLElement | null> }).ref;

  return React.cloneElement(
    Element as React.ReactElement<
      Props & { ref?: React.Ref<HTMLElement | null> }
    >,
    {
      ...rest,
      ...props,
      className: classNames(className, props.className),
      ref: mergeRefs(ref, childRef),
    }
  );
});

Layout.displayName = 'Layout';

type LayoutProps = Spec.Props;

export type { ColumnSpan } from './spec';
export { Layout, type LayoutProps };
