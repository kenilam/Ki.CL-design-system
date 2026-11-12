import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components';
import * as Tb from 'react-icons/tb';

// Constants
import { CLASS_NAME } from 'design/components/select/constants';

// Partials
import { SelectTrigger } from 'design/components/select/trigger';
import { SelectValue } from 'design/components/select/value';

import type { SelectTriggerProps } from 'design/components/select/spec';

const isTrigger = (
  child: React.ReactNode
): child is React.ReactElement<SelectTriggerProps> => {
  return React.isValidElement(child) && child.type === SelectTrigger;
};

const Face: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const trigger = React.Children.toArray(children).find(isTrigger);

  return (
    <Layout
      alignItems='center'
      display='flex'
      gap='narrower'
      justifyContent='space-between'
    >
      <span
        aria-hidden
        className={classNames(
          `${CLASS_NAME}__trigger`,
          'kicl-inline-size-full',
          'kicl-line-height',
          'kicl-text-align-start',
          trigger?.props.className
        )}
      >
        {trigger ? trigger.props.children : <SelectValue />}
        <Tb.TbChevronDown className={`${CLASS_NAME}__icon`} />
      </span>
    </Layout>
  );
};

export { Face };
