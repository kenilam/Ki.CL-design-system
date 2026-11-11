import React from 'react';

export const labelOf = (
  children: React.ReactNode,
  value: string | undefined
) => {
  return React.Children.toArray(children).find(
    (
      child
    ): child is React.ReactElement<{
      value: string;
      children?: React.ReactNode;
    }> => {
      return (
        React.isValidElement(child) &&
        (child.props as { value?: string }).value === value
      );
    }
  )?.props.children;
};

export const legendOf = (children: React.ReactNode) => {
  const [first, ...others] = React.Children.toArray(children);
  const legend =
    React.isValidElement<React.ComponentPropsWithoutRef<'legend'>>(first) &&
    first.type === 'legend'
      ? first
      : null;

  return { legend, options: legend ? others : [first, ...others] };
};
