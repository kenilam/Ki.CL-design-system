import React, { useState } from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Ri from 'react-icons/ri';

// Components
import { Animation, Layout, Spinner } from 'design/components';

// Styles
import './styles.scss';

// Spec
import * as Spec from './spec';

const CLASS_NAME = 'kicl--components--image';

type Result = { src: string; failed: boolean };

const Image: React.FunctionComponent<Spec.Props> = ({
  alt,
  className: _className,
  data,
  loading = 'lazy',
  placeholder = (
    <Ri.RiFileUnknowLine
      className={classNames('kicl-color-warning', 'kicl-font-size-large')}
    />
  ),
  onError: errorHandler,
  onLoad: loadHandler,
  ...props
}) => {
  // Keyed by `src`, so a new `data` starts loading again without an effect.
  const [result, setResult] = useState<Result>();

  const isSettled = !!data && result?.src === data;
  const hasError = isSettled && result.failed;
  const isLoading = !!data && !isSettled;

  const className = classNames(
    CLASS_NAME,
    'kicl-overflow-hidden',
    {
      [`${CLASS_NAME}--is-loading`]: isLoading,
      [`${CLASS_NAME}--has-error`]: hasError,
    },
    _className
  );

  const onError: Spec.Props['onError'] = (event) => {
    if (data) setResult({ src: data, failed: true });

    errorHandler?.(event);
  };

  const onLoad: Spec.Props['onLoad'] = (event) => {
    if (data) setResult({ src: data, failed: false });

    loadHandler?.(event);
  };

  return (
    <span {...props} className={className}>
      {/*
       * The picture fills the box the component was given, rather than
       * setting it. `object-fit` is inert until the box has a definite height;
       * a percentage against an indefinite height still resolves to `auto`,
       * so an image left to its natural ratio is unaffected.
       */}
      {!hasError && (
        <img
          className={classNames(
            'kicl-block-size-full',
            'kicl-display-block',
            'kicl-inline-size-full'
          )}
          src={data}
          alt={alt}
          loading={loading}
          onLoad={onLoad}
          onError={onError}
        />
      )}
      {hasError && alt && <span className='kicl-hidden'>{alt}</span>}
      <Animation in={hasError} duration='faster' property='blur'>
        <Layout>
          <span
            aria-hidden
            className={classNames(
              `${CLASS_NAME}--error`,
              'kicl-inset-block-center',
              'kicl-inset-inline-center',
              'kicl-position-absolute'
            )}
            data-src={data}
          >
            {placeholder}
          </span>
        </Layout>
      </Animation>
      <Spinner
        className='kicl-font-size-large'
        in={isLoading}
        duration='faster'
      />
    </span>
  );
};

type ImageProps = Spec.Props;

export { Image, type ImageProps };
