import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Spinner } from 'design/components';

// Spec
import type * as Spec from './spec';

// Class names
import { hasText } from './class-names';

const getButtonContent = ({
  after,
  before,
  busy,
  children: label,
  iconOnlyUpTo,
}: Spec.ContentProps & Pick<Spec.LookProps, 'iconOnlyUpTo'>) => {
  const text = hasText(before, label, after);

  const children =
    iconOnlyUpTo && text ? (
      <span
        className={classNames(
          'kicl-text-truncate',
          `kicl-hidden-up-to-${iconOnlyUpTo}`
        )}
      >
        {label}
      </span>
    ) : (
      label
    );

  if (!busy) {
    return { after, before, children };
  }

  const spinner = <Spinner position='inline' />;

  if (text) {
    return { after: spinner, before, children };
  }

  return { after, before, children: spinner };
};

export { getButtonContent };
