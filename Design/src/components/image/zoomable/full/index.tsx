import React from 'react';

// Components
import { Dialog } from 'design/components';
import { Image } from 'design/components/image';

// Context
import { useZoomableImage } from 'design/components/image/zoomable/context';

// Constants
import { CLASS_NAME } from 'design/components/image/zoomable/constants';

// Styles
import './styles.scss';

const Full: React.FunctionComponent = () => {
  const image = useZoomableImage();

  return (
    <Dialog
      aria-label={image.alt}
      className={`${CLASS_NAME}__full`}
      fullScreen
      id={image.id}
    >
      <Image
        alt={image.alt}
        className='kicl-margin-wide'
        data={image.data}
        placeholder={image.placeholder}
      />
    </Dialog>
  );
};

export { Full };
