const CLASS_NAME = 'kicl--widgets--contact-form';

/** The API's limit. */
const MESSAGE_LENGTH = 5000;

/** Loose on purpose: the API has the last word on what an address is. */
const EMAIL = /^\S+@\S+\.\S+$/;

const COPY = {
  email: 'Your email',
  emailInvalid: 'Enter an email address',
  failed: 'The message was not sent. Try again.',
  message: 'Message',
  messageLong: `Keep it under ${MESSAGE_LENGTH} characters`,
  messageRequired: 'Write a message',
  /** The period is the API's `CONTACT_RETENTION_DAYS`. Change both together. */
  privacy:
    'Your address and message are kept for 90 days so I can answer. Ask in a message and they are deleted sooner.',
  send: 'Send',
  sent: 'Message sent',
  sentTo: (email: string) => `A confirmation is on its way to ${email}.`,
};

export { CLASS_NAME, COPY, EMAIL, MESSAGE_LENGTH };
