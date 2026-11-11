import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/video/spec';

// Partials
import { Status, useStatus } from './status';

type Props = Omit<Spec.Props, 'className'>;

const VideoContext = createContext<Omit<Props, 'children'> | null>(null);

const Provider: React.FunctionComponent<Props> = ({
  autoPlay = true,
  children,
  controls = false,
  controlsList = 'nofullscreen nodownload',
  height = 'auto',
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'auto',
  width = 'auto',
  ...props
}) => {
  return (
    <Status>
      <VideoContext.Provider
        value={{
          ...props,
          autoPlay,
          controls,
          controlsList,
          height,
          loop,
          muted,
          playsInline,
          preload,
          width,
        }}
      >
        {children}
      </VideoContext.Provider>
    </Status>
  );
};

const useVideo = () => {
  const video = useContext(VideoContext);

  if (!video) {
    throw new Error('useVideo needs a Video around it.');
  }

  return video;
};

export { Provider, useStatus, useVideo };
