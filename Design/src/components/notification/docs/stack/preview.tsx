import React, { useState } from 'react';

import * as Bs from 'react-icons/bs';

import {
  Button,
  Notification,
  NotificationGroup,
  type Level,
} from 'design/components';

import type { Props } from 'design/components/notification/docs/controls';

const MESSAGES: Array<{
  avatar: React.ReactNode;
  id: string;
  level: Level;
  message: string;
  title: string;
  to?: string;
}> = [
  {
    avatar: <Bs.BsMusicNoteBeamed aria-hidden />,
    id: 'aerith',
    level: 'neutral',
    message: 'Ready to play.',
    title: 'Aerith’s Theme',
    to: '#notification-stack',
  },
  {
    avatar: <Bs.BsExclamationCircleFill aria-hidden />,
    id: 'interstellar',
    level: 'error',
    message: 'No music was found in this file.',
    title: 'Interstellar',
  },
  {
    avatar: <Bs.BsMusicNoteBeamed aria-hidden />,
    id: 'eternity',
    level: 'neutral',
    message:
      'Ready to play. The chords were read from the image too, and they play softly under the notes.',
    title: 'Final Fantasy Eternity',
  },
];

const Preview: React.FC<Props> = ({ side, variant }) => {
  const [messages, setMessages] = useState(MESSAGES);

  return (
    <>
      <Button
        onClick={() => setMessages(MESSAGES)}
        popoverTarget='notification-stack'
      >
        Show
      </Button>
      <NotificationGroup id='notification-stack' side={side}>
        {messages.map(({ avatar, id, level, message, title, to }) => (
          <Notification
            avatar={avatar}
            key={id}
            onClear={() => {
              setMessages((shown) => shown.filter((other) => other.id !== id));
            }}
            level={level}
            title={title}
            to={to}
            variant={variant}
          >
            {message}
          </Notification>
        ))}
      </NotificationGroup>
    </>
  );
};

export { Preview };
