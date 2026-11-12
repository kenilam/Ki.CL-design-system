import React from 'react';

// Spec
import * as Spec from './spec';

// Partials
import { Provider } from './context';
import { Full } from './full';
import { Preview } from './preview';

const ZoomableImage = React.forwardRef<HTMLButtonElement, Spec.Props>(
  ({ alt, className, data, loading, onError, onLoad, placeholder }, ref) => {
    return (
      <Provider
        alt={alt}
        data={data}
        loading={loading}
        onError={onError}
        onLoad={onLoad}
        placeholder={placeholder}
      >
        <Preview className={className} ref={ref} />
        <Full />
      </Provider>
    );
  }
);

ZoomableImage.displayName = 'ZoomableImage';

type ZoomableImageProps = Spec.Props;

export { ZoomableImage, type ZoomableImageProps };
