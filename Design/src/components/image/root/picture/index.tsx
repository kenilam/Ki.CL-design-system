import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import type * as Spec from 'design/components/image/spec';

// Context
import { useImage } from 'design/components/image/context';

const Picture: React.FunctionComponent = () => {
  const image = useImage();

  if (image.hasError) {
    return null;
  }

  const onError: Spec.Props['onError'] = (event) => {
    image.settle(true);
    image.onError?.(event);
  };

  const onLoad: Spec.Props['onLoad'] = (event) => {
    image.settle(false);
    image.onLoad?.(event);
  };

  /*
   * A percentage height resolves to `auto` when the box has no definite
   * height, so an image left at its natural ratio is unaffected.
   */
  return (
    <img
      className={classNames(
        'kicl-block-size-full',
        'kicl-display-block',
        'kicl-inline-size-full'
      )}
      src={image.data}
      alt={image.alt}
      loading={image.loading ?? 'lazy'}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export { Picture };
