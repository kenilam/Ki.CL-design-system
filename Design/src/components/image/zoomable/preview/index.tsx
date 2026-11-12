import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components';
import { Image } from 'design/components/image';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useZoomableImage } from 'design/components/image/zoomable/context';

type Props = Pick<React.ComponentProps<'button'>, 'className' | 'ref'>;

const Preview: React.FunctionComponent<Props> = ({ className, ref }) => {
  const t = useCopy();
  const image = useZoomableImage();

  return (
    <Button
      aria-label={t('action_open_image', { title: image.alt })}
      className={classNames('kicl-cursor-zoom-in', className)}
      command='show-modal'
      commandfor={image.id}
      ref={ref}
      unstyled
    >
      <Image
        alt=''
        data={image.data}
        loading={image.loading}
        onError={image.onError}
        onLoad={image.onLoad}
        placeholder={image.placeholder}
      />
    </Button>
  );
};

export { Preview };
