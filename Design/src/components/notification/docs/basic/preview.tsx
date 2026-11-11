import React, { useState } from 'react';

import * as Tb from 'react-icons/tb';

import { Button, Notification, NotificationGroup } from 'design/components';

import type { Props } from 'design/components/notification/docs/controls';

const Preview: React.FC<Props> = ({ level, side, variant }) => {
  const [shown, setShown] = useState(true);

  return (
    <>
      <Button onClick={() => setShown(true)} popoverTarget='notification-basic'>
        Show
      </Button>
      <NotificationGroup id='notification-basic' side={side}>
        {shown ? (
          <Notification
            avatar={<Tb.TbAlertCircleFilled aria-hidden />}
            level={level}
            onClear={() => setShown(false)}
            title='Interstellar'
            variant={variant}
          >
            No music was found in this file.
          </Notification>
        ) : null}
      </NotificationGroup>
    </>
  );
};

export { Preview };
