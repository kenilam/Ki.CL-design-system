import React from 'react';

// Styles
import './styles.scss';

// Spec
import * as Spec from './spec';

// Partials
import { Provider } from './context';
import { Root } from './root';

const Image: React.FunctionComponent<Spec.Props> = ({
  alt,
  data,
  loading,
  onError,
  onLoad,
  placeholder,
  ...props
}) => {
  return (
    <Provider
      alt={alt}
      data={data}
      loading={loading}
      onError={onError}
      onLoad={onLoad}
      placeholder={placeholder}
    >
      <Root {...props} />
    </Provider>
  );
};

type ImageProps = Spec.Props;

export { Image, type ImageProps };
