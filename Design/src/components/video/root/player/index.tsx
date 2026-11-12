import React, { useCallback } from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import type * as Spec from 'design/components/video/spec';

// Context
import { useStatus, useVideo } from 'design/components/video/context';

// Constants
import { CLASS_NAME } from 'design/components/video/constants';

// Styles
import './styles.scss';

const Player: React.FunctionComponent = () => {
  const { captions, onLoadedData, onLoadStart, src, ...rest } = useVideo();
  const { setLoading } = useStatus();

  const video = useCallback(
    (node: HTMLVideoElement | null) => {
      if (node && node.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        setLoading(false);
      }
    },
    [setLoading]
  );

  const onLoaded: Spec.Props['onLoadedData'] = (event) => {
    setLoading(false);

    onLoadedData?.(event);
  };

  const onStart: Spec.Props['onLoadStart'] = (event) => {
    setLoading(true);

    onLoadStart?.(event);
  };

  return (
    // Muted by default; a video with speech passes `captions`.
    // oxlint-disable-next-line jsx-a11y/media-has-caption
    <video
      {...rest}
      ref={video}
      className={classNames(
        `${CLASS_NAME}__player`,
        'kicl-block-size-full',
        'kicl-inline-size-full'
      )}
      onLoadStart={onStart}
      onLoadedData={onLoaded}
    >
      <source src={src} type='video/mp4' />
      {captions ? (
        <track default kind='captions' src={captions} srcLang='en' />
      ) : null}
    </video>
  );
};

export { Player };
